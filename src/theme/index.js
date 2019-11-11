import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import lightBlue from "@material-ui/core/colors/lightBlue";

export default createMuiTheme({
    overrides: {
       
        // MuiInput: {
        //     underline: {
        //         "&:before": {
        //             borderBottom: "1px solid rgba(255, 255, 255, 0.42)"
        //         }
        //     }
        // },
        MuiInput: {
            underline: {
                "&:after": {
                    borderBottom: "1px solid none"
                }
            }
        },
        MuiAppBar:{
            colorPrimary:{
                color:"#fff",
                backgroundColor: "#1976d2"
            }
        },
        MuiTableCell:{
            root:{
                maxWidth:"10% !important",
                wordBreak:"break-word",
                padding:"10px"
            }
        },
        MuiButton: {
            textPrimary:{
                color: "#1976d2",
                backgroundColor:"transparent",
                border:"1px solid #1976d2",
                "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff"
                }
            },
            
            outlined: {
                "&$disabled": {
                    border: "1px solid #374f21 !important",
                    color: "#374f21 !important"
                }
            },
            text: {
                "&$disabled": {
                    color: "#1976d2 !important",
                    fontSize: "14px"
                }
            },
            raised: {
                boxShadow: "none"
            }
        },
       
    },
    palette: {
        primary: {
            main: "#d93025",//color red here
            contrastText: "#fff"
        },
        secondary: {
            main: "#c6ff00",
            contrastText: "#fff"
        },
        text: {
            primary: "#000",
            secondary: "#fff"
        },
        background: {
            default: "#0f2140"
        }
    },
    typography: {
        useNextVariants: true,
       
    }
});
