import React, { Component, Fragment } from 'react';
import { Formik, Field } from "formik";
import InputField from "../FormComponent/input.field";
import LoadingButton from "../FormComponent/loading.loadingBtn";
 import LoginSchema from "../../validation/loginForm.validation";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
const styles = theme => ({
  topContainer:{
      marginTop: "20px",
  }
});
const formFieldData=[
    {
      name:"username",
      placeholder:"enter username",
      type:"text"
    },
    {
      name:"pass",
      placeholder:"enter password",
      type:"password"
    },
]
class LoginForm extends Component {
  
    render() {
      const { onSubmit, initialValues, classes } = this.props;
         return (
      <Formik
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        render={({
          handleSubmit,
          dirty,
          isSubmitting,
          values,
          errors,
          touched,
          ...props
        }) => {
          return (
            <Fragment>
              <Grid container justify="center">
                <Grid item sm={4}>
                  <form onSubmit={handleSubmit} noValidate>
                      {
                        formFieldData.map((obj,index)=>(
                          <Grid key={index} className={classes.topContainer}>
                            <Field
                              name={obj.name}
                              placeholder={obj.placeholder}
                              type={obj.type}
                              component={InputField}
                            />
                           
                          </Grid>

                        ))
                      }
                      <Grid className={classes.topContainer}>
                        <LoadingButton
                          variant="text"
                          disabled={!dirty || isSubmitting}
                        >
                          SUBMIT
                        </LoadingButton>
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


export default withStyles(styles)(LoginForm);