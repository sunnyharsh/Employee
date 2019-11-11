import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from 'react-router-dom'
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  contactList:{
    cursor:"pointer"
  }
});

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isList:false
    }
  }
  componentDidMount(){
    let currentPath=this.props.location.pathname
    if(currentPath==="/"){
      this.setState({
        isList: true
      })
    }
    else{
      this.setState({
        isList: false
      })
    }
  }
  list=()=>{
    if(window.localStorage){
       localStorage.clear()
       this.props.history.push('/')
    }
  }
  homeRedirect=()=>{
    this.props.history.push('/home')
  }
  render(){
    // const { isList }= this.state;
    const { classes, _logoutShow } =this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Grid>
                <Typography variant="h6" color="inherit" style={{cursor:"pointer"}} onClick={this.homeRedirect}>
                 {_logoutShow && _logoutShow.isList ? "Employee data":"Login"} 
                </Typography>
            </Grid>
            <Grid>
              {
                _logoutShow && _logoutShow.isList ? <Typography onClick={this.list} align="right" variant="h6" color="inherit" className={classes.contactList}>
                            Logout
                      </Typography> : null
              }
            </Grid>
          </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapState = ({logoutShow}) => {
  
    return {
       _logoutShow: logoutShow
    };
};
export default connect(mapState)((withStyles(styles)(withRouter(Header))));
 