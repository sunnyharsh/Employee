import React, { Component } from 'react';
import LoginForm from "../forms/index.LoginForm";
import { connect } from "react-redux";
import {  logOutShow } from "../../store/actions/index.action";
import { withRouter } from 'react-router-dom'
 class Login extends Component {
   //login form submit here
    formSubmit = values => {
      if(values.username==="admin" && values.pass==="123456"){
        if(window.localStorage){
          localStorage.setItem('person', JSON.stringify(values));
          this.props.history.push('/home')
        }
      }
    };
    componentDidMount(){
      if(window.localStorage){
        let storageLocal=JSON.parse(localStorage.getItem('person'));
        if(storageLocal && storageLocal.username==="admin" && storageLocal.pass==="123456"){
          this.props.history.push('/home')
          this.props.$logOutShow({isList:false})
        }
        else{
          this.props.history.push('/')
          this.props.$logOutShow({isList:false})
        }
      }
    }
  render() {
    return (
      <React.Fragment>   
        <LoginForm
            initialValues={{email: "", pass: ""}}
            onSubmit={this.formSubmit}
          />
      </React.Fragment>
    )
  }
}
const mapState = ({contactShow}) => {
    return {
       _contactShow: contactShow
    };
};
const mapDispatch = dispatchEvent => ({
    $logOutShow: values => dispatchEvent(logOutShow(values)),
});
export default connect(
  mapState,
  mapDispatch,  
)(withRouter(Login));

// export default Contact;