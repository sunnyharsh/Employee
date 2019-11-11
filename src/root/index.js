import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import store from "../store/index.store";
import theme from "../theme";
import { Provider } from "react-redux";
import Routing from "../routing";
import Header from "../components/header";
import { Grid } from "@material-ui/core";

class Index extends Component{
    render(){
        return(
             <ThemeProvider theme={theme}>
                <Provider store={store()} >
                    <BrowserRouter theme={theme}>
                        <React.Fragment>
                            <Grid >
                                <Header/>
                                <Routing/>
                            </Grid>
                                
                        </React.Fragment>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        )
    }
}
export default Index;