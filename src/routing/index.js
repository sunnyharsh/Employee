import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import PrintData from "../components/printData";
import withStyles from "@material-ui/core/styles/withStyles";
import CreateData from "../components/createEmlpoye";
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  topContainer:{
      marginTop: "20px",
  }
});
class Routing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            beforeEditData:{}
        }
    }
    beforeEditData=(values)=>{
        this.setState({
            beforeEditData: values
        },()=>{
            this.props.history.push('/create')
        })
        

    }
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <div className={classes.topContainer}>
                    <Switch>
                        <Route exact path="/">
                            <Login/>
                        </Route>
                        <Route path="/home">
                            <PrintData beforeEditData={this.beforeEditData}/>
                        </Route>
                        <Route path="/create">
                            <CreateData beforeEditData={this.state.beforeEditData}/>
                        </Route>
                        <Redirect from="/*" to="/" />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(withRouter(Routing));
