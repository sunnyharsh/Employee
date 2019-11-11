// import React, { Component, Fragment } from 'react';
// import { Formik, Field } from "formik";
// import InputField from "../FormComponent/input.field";
// import LoadingButton from "../FormComponent/loading.loadingBtn";
//  import addEmpSchema from "../../validation/addEmpForm.validation";
// import { Grid } from "@material-ui/core";
// import withStyles from "@material-ui/core/styles/withStyles";
// const styles = theme => ({
//   topContainer:{
//       padding: "20px 10px 0px 10px"
//   },
//   update:{
//     padding: "36px 10px 0px 10px"
//   },
//   updateBtn:{
//     padding:"6px 80px"
//   }
// });
// class AddEmpForm extends Component {
//     state = {
//     name: "",
//     salary: "",
//     age: "",
//     id: ""
//   };

//   nameChangedHandler = (e, type) => {
//     if (type === "name") {
//       this.setState({
//         name: e.target.value
//       });
//     }

//     if (type === "age") {
//       this.setState({
//         age: e.target.value
//       });
//     }

//     if (type === "salary") {
//       this.setState({
//         salary: e.target.value
//       });
//     }
//   };

//   valueHandler = (name, age, salary, id) => {
//     if (
//       this.state.name === "" &&
//       this.state.age === "" &&
//       this.state.salary === ""
//     ) {
//       this.setState({
//         name,
//         age,
//         salary,
//         id
//       });
//     }
//   };

//   apiSubmit = e => {
//     e.preventDefault();
//     console.log("API SUBMIT:", this.state);
//   };
//     render() {
//       const { onSubmit, initialValues, classes, handleChange } = this.props;
//     console.log("initialValues:", initialValues);

//     if (initialValues) {
//       this.valueHandler(
//         initialValues.name,
//         initialValues.age,
//         initialValues.salary,
//         initialValues.id
//       );
//     }

//     let { name, salary, age } = this.state;
//          return (
//       <Formik
//         onSubmit={onSubmit}
//         validationSchema={addEmpSchema}
//         validateOnBlur={false}
//         validateOnChange={false}
//         // initialValues={initialValues}
//         render={({
//           handleSubmit,
//           dirty,
//           isSubmitting,
//           handleChange,
//           values,
//           errors,
//           touched,
//           ...props
//         }) => {
//           return (
//             <Fragment>
//               <Grid container justify="center">
//                 <Grid item sm={4}>
//                   <form onSubmit={this.apiSubmit} noValidate>
//                     <Grid  className={classes.topContainer}>
//                             <Field
//                               name="name"
//                               placeholder="enter name"
//                               type="text"
//                               value={name}
//                               component={InputField}
//                               onChange={e => this.nameChangedHandler(e, "name")}
//                             />
//                           </Grid>
//                           <Grid className={classes.topContainer}>
//                             <Field
//                               name="salary"
//                               placeholder="enter salry"
//                               type="text"
//                               value={salary}
//                               component={InputField}
//                               onChange={e => this.nameChangedHandler(e, "salary")}
//                             />
//                           </Grid>
//                           <Grid className={classes.topContainer}>
//                             <Field
//                               name="age"
//                               placeholder="enter age"
//                               type="text"
//                               value={age}
//                               component={InputField}
//                               onChange={e => this.nameChangedHandler(e, "age")}
//                             />
//                           </Grid>
//                           {/* <Grid container justify="center"> */}
//                            <Grid className={classes.topContainer}>
//                         <LoadingButton
//                           variant="text"
//                           disabled={!dirty || isSubmitting}
//                         >
//                           SUBMIT
//                         </LoadingButton>
//                       </Grid>
//                             {/* <Grid item sm={6} className={classes.update}>
//                               <Button color="primary"
//                               className={classes.updateBtn}
//                                 variant="text"
//                                 // disabled={!dirty || isSubmitting}
//                               >
//                                 UPDATE
//                               </Button>
//                             </Grid> */}
//                           {/* </Grid> */}
                      
//                   </form>
//                 </Grid>
//               </Grid>
//             </Fragment>
//           );
//         }}
//       />
//     );
//     }
// }


// export default withStyles(styles)(AddEmpForm);




import React, { Component, Fragment } from "react";
import { Formik, Field } from "formik";
import InputField from "../FormComponent/input.field";
import LoadingButton from "../FormComponent/loading.loadingBtn";
import addEmpSchema from "../../validation/addEmpForm.validation";
import { Grid, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {insertData, logOutShow, updateData} from "../../store/actions/index.action"
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  topContainer: {
    padding: "20px 10px 0px 10px"
  },
  update: {
    // padding: "36px 10px 0px 10px",
        color: "#1976d2",
    border: "1px solid #1976d2",
    backgroundColor: "transparent"
  },
  
});
class AddEmpForm extends Component {
  state = {
    name: "",
    salary: "",
    age: "",
    id: ""
  };

  nameChangedHandler = (e, type) => {
    if (type === "name") {
      this.setState({
        name: e.target.value
      });
    }

    if (type === "age") {
      this.setState({
        age: e.target.value
      });
    }

    if (type === "salary") {
      this.setState({
        salary: e.target.value
      });
    }
  };

  valueHandler = (name, age, salary, id) => {
    if (
      this.state.name === "" &&
      this.state.age === "" &&
      this.state.salary === ""
    ) {
      this.setState({
        name,
        age,
        salary,
        id
      });
    }
  };

  apiSubmit = e => {
    this.props.$insertData(this.state)
    this.props.history.push('/home')
    e.preventDefault();
  };
  updateData=(data)=>{
    this.props.$updateData(data)
    this.props.history.push('/home')
  }

  render() {
    const { onSubmit, initialValues, classes, handleChange } = this.props;
    if (initialValues) {
      this.valueHandler(
        initialValues.name,
        initialValues.age,
        initialValues.salary,
        initialValues.id
      );
    }
    let { name, salary, age } = this.state;
    return (
      <Formik
        validationSchema={addEmpSchema}
        validateOnBlur={false}
        validateOnChange={false}
        render={({
          dirty,
          isSubmitting,
          handleChange,
          values,
          errors,
          touched,
          ...props
        }) => {
          return (
            <Fragment>
              <Grid container justify="center">
                <Grid item sm={4}>
                  <form onSubmit={this.apiSubmit} noValidate>
                    <Grid className={classes.topContainer}>
                      <Field
                        name="name"
                        placeholder="enter name"
                        type="text"
                        value={name}
                        component={InputField}
                        onChange={e => this.nameChangedHandler(e, "name")}
                      />
                    </Grid>
                    <Grid className={classes.topContainer}>
                      <Field
                        name="salary"
                        placeholder="enter salry"
                        type="text"
                        value={salary}
                        component={InputField}
                        onChange={e => this.nameChangedHandler(e, "salary")}
                      />
                    </Grid>
                    <Grid className={classes.topContainer}>
                      <Field
                        name="age"
                        placeholder="enter age"
                        type="text"
                        value={age}
                        component={InputField}
                        onChange={e => this.nameChangedHandler(e, "age")}
                      />
                    </Grid>
                    <Grid container justify="center">
                      <Grid className={classes.topContainer}>
                        <LoadingButton
                          variant="text"
                          type="submit"
                          // disabled={!dirty || isSubmitting}
                        >
                          SUBMIT
                        </LoadingButton>
                      </Grid>
                       <Grid className={classes.topContainer}>
                          <Button style={{marginTop:"16px",
                                  border: "1px solid #1976d2",
                                  color: "#1976d2"}} onClick={()=>this.updateData(this.state)}>
                            UPDATE
                          </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Fragment>
          );
        }}
      />
    );
  }
}


const mapState = ({  }) => {
    return {
    };
};
const mapDispatch = dispatchEvent => ({
    $insertData: values => dispatchEvent(insertData(values)),
    $logOutShow: values => dispatchEvent(logOutShow(values)),
    $updateData: values => dispatchEvent(updateData(values)),
});
export default connect(mapState, mapDispatch) (withRouter(withStyles(styles)(AddEmpForm)));

// export default withStyles(styles)(AddEmpForm); updateData
