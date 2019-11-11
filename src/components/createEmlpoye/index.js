import React, { Component } from 'react'
import { connect } from "react-redux";
import {insertData, logOutShow} from "../../store/actions/index.action"
import AddEmpForm from "../forms/index.addEmployeForm"
import { withRouter } from 'react-router-dom'

class CreateData extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            salary: "", 
            age:""
        }
    }
    createEmp=(values)=>{
        this.props.$insertData(values)
        this.props.history.push('/home')
    }
    componentDidMount(){
        console.log(this.props.beforeEditData.id,"beforeEditData")
        const { beforeEditData }=this.props
        this.setState({
            name: beforeEditData.employee_name,
            salary: beforeEditData.employee_salary, 
            age:beforeEditData.employee_age,
            id:beforeEditData.id
        })
         if(window.localStorage){
            let storageLocal=JSON.parse(localStorage.getItem('person'));
            if(storageLocal && storageLocal.username==="admin" && storageLocal.pass==="123456"){
                this.props.history.push('/create')
                this.props.$logOutShow({isList:true})
            }
            else{
                this.props.history.push('/')
                this.props.$logOutShow({isList:true})
            }
        } 
    }
    componentWillUnmount(){
        this.setState({
            name: "",
            salary: "", 
            age:""
        })
    }
    handleChange=(event)=>{
        console.log(typeof event.target.name,"....")
        this.setState({
            name: event.target.name=="name" ? event.target.value : this.state.name,
            salary: event.target.name=="salary" ? event.target.value : this.state.salary,
            age: event.target.name=="age" ? event.target.value : this.state.age
        })
    }

    render(){
        const { name, salary, age,id }=this.state
        return(
            <React.Fragment>
                <AddEmpForm
                    initialValues={{name: name, salary: salary, age:age ,id:id}}
                    onSubmit={this.createEmp}
                    handlechange={this.handleChange}
                />
            </React.Fragment>
        )
    }
}
const mapState = ({  }) => {
    return {
    };
};
const mapDispatch = dispatchEvent => ({
    $insertData: values => dispatchEvent(insertData(values)),
    $logOutShow: values => dispatchEvent(logOutShow(values)),
});
export default connect(mapState, mapDispatch) (withRouter(CreateData));
