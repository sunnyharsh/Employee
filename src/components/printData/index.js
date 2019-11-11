import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from 'react-router-dom'
import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import { logOutShow,employeeData, deleteData } from "../../store/actions/index.action";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  plusIcon:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color:"#fff",
    backgroundColor:"#1976d2"
  },
  tableCell:{
    width: "10% !important"
  },
  operationIcon:{
    width:"34px",
    height: "34px",
    marginRight: "24px"
  }
});
const tHead=[
  {headName:"Id"},
  {headName:"Name"},
  {headName:"Salary"},
  {headName:"Age"},
  {headName:"Operations"}
]
class PrintData extends Component  {
  constructor(props){
    super(props);
    this.state={
      open: false,
      vertical: 'top',
      horizontal: 'center',
      totalData:[],
      deleteId:"",
      istrue:true
    }
  }
  addMore=()=>{
  this.props.history.push('/create')
  }
  apiCall=()=>{
    this.props.$employeeData()
  }
  deleteData=(id)=>{
    let localTotal=this.state.totalData.filter(function(number) {
          return number.id != id;
    });
    this.setState({
      deleteId:id,
      open:true,
      totalData:localTotal,
      istrue:false
    })
    this.props.$deleteData(id)
    this.render()
  }
  editData=(values)=>{
    this.props.beforeEditData(values)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps._empData && this.state.istrue){
      this.setState({
        totalData: nextProps._empData,
      })
    }
  }
  handleClose=()=>{
    this.setState({
        open:false
    })
  }
  componentDidMount(){
      this.props.$logOutShow({isList:false})
       if(window.localStorage){
        let storageLocal=JSON.parse(localStorage.getItem('person'));
        if(storageLocal && storageLocal.username==="admin" && storageLocal.pass==="123456"){
          this.props.history.push('/home')
          this.props.$logOutShow({isList:true})
          this.apiCall()
        }
        else{
          this.props.history.push('/')
          this.props.$logOutShow({isList:true})
        }
      }
  }
  render(){
    const {classes } = this.props;
    const { open, vertical, horizontal, totalData}=this.state
    return (
       <Grid container justify="center">
          <Grid item sm={10}>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {
                      tHead.map((obj, index)=>(
                       <TableCell key={index} align="center">{obj.headName}</TableCell>
                      ))
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                   {/* {id: "1", employee_name: "PB", employee_salary: "2153", employee_age: "1", profile_image: ""} */}
                  {totalData && totalData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.tableCell} align="center" >{row.id} </TableCell>
                      <TableCell className={classes.tableCell} align="center">{row.employee_name}</TableCell>
                      <TableCell className={classes.tableCell} align="center">{row.employee_salary}</TableCell>
                      <TableCell className={classes.tableCell} align="center">{row.employee_age}</TableCell>
                      <TableCell className={classes.tableCell} align="center">
                        <Fab aria-label="add" className={classes.operationIcon} onClick={()=>this.editData(row)}>
                          <EditIcon />
                        </Fab>
                        <Fab aria-label="add" className={classes.operationIcon} onClick={()=>this.deleteData(row.id)}>
                          <DeleteIcon />
                        </Fab>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
         </Grid>
         <Grid>
            <Fab aria-label="add" className={classes.plusIcon} onClick={this.addMore}>
              <AddIcon />
            </Fab>
          </Grid>
        <Grid>
       <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Data delete</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
        </Grid>
      </Grid>
    );
  }
}
const mapState = ({ empData, insertData,deleteData }) => {
    return {
        _empData : empData,
        _insertData: insertData,
        _deleteData: deleteData
    };
};
const mapDispatch = dispatchEvent => ({
    $logOutShow: values => dispatchEvent(logOutShow(values)),
    $employeeData:()=>dispatchEvent(employeeData()),
    $deleteData: values => dispatchEvent(deleteData(values)),
});

export default connect(mapState, mapDispatch) ( (withStyles(styles)(withRouter(PrintData))));