import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        htmlFontSize: 18,
    },
    spacing: 8,
     /*palette: {
       primary: {
         light: "#000",
         main: "#0082FB",
         dark: "#0082FB",
         contrastText: "#fff"
       },
       secondary: {
         light: "#000",
         main: "#0044ff",
         // dark: will be calculated from palette.secondary.main,
         contrastText: "#000"
       }
       // error: will use the default color
     },*/
    overrides: {
        MuiButton: {
            root: {
                // Name of the styleSheet
                root: {
                  // Name of the rule
                  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  borderRadius: '40px',
                  border: 0,
                  color: "red",
                  height: 48,
                  padding: "0 30px",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)",
                  /*'&:hover': {
                  background: "#000000",
                  }*/
                }
              
            }
        },
        MuiFormControl: {
            root: {
                width: '100%',
            },
            marginNormal: {
                marginTop: "23px"
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: '12px',
                lineHeight: 'normal',
                color: '#212121',
                margin: '15px 0 13px',
            },
        },
        MuiInputLabel: {
            formControl: {
                top: '15px',
            },
            shrink: {
                transform: 'none',
            },
        },
        MuiInput: {
            formControl: {
                'label+&': {
                    marginTop: '0',
                },
            },
        },
        MuiFormHelperText: {
            root: {
                textAlign: 'right',
                marginTop: '5px',
            },
        },
        MuiRadio: {
            root: {
                display: 'none',
                '&+span': {
                    background: '#DBDBDB',
                    borderRadius: '25px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    color: '#929292',
                },
                "&$checked": {
                    '&+span': {
                        color: '#0082FB',
                        background: '#C9E5FF',
                    },
                }
            },
        },
        MuiFormGroup: {
            root: {                
                '&.horizontal': {
                    flexDirection: 'row',
                },
                '&>label': {
                    margin: '0 20px 0 0',
                }
            },
        },
        MuiInputBase: {
            root: {
                width: "100%",
                "&$error": {
                    '&:after': {
                        display: 'none',
                    },
                    '&>input': {
                        borderColor: '#DC1111',
                    },
                },
                '&:before': {
                    display: 'none',
                },
                '&$focused': {
                    '&:after': {
                        display: 'none',
                    },
                }
            },
            input: {
                padding: '10px 16px',
                background: '#F1F1F1',
                border: '0',
                width:'100%',
                height:'22px',
                borderRadius: '35px',
                '&:focus': {
                    borderColor: '#0082FB',
                },
            },
            inputMultiline: {
                padding: "15px"
            },
            adornedEnd: {
                background: 'white',
                borderRadius: '22px'
            }
        },
        MuiStep: {
            root: {
                height: "20px"
            }
        },
        MuiStepIcon: {
            root: {
                color: "#FFD9EA",
            },
            text: {
                fill: "#F93C88"
            }
        },
        MuiStepConnector: {
            vertical: {
                padding: "0px",
                marginLeft: "10px"
            },
            lineVertical: {
                borderLeft: "#FF2F82",
                borderTop: '50px'
            }
        },
        MuiStepLabel: {
            label: {
                fontSize: "17px",
                lineHeight: "23px",
                color: "#4F4F4F"
            }
        },
        MuiExpansionPanel: {
            root: {
                boxShadow: 'none',
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#FF2F82"
            }
        },
        MuiPickersDay: {
            daySelected: {
                backgroundColor: "#FF2F82",
                '&:hover': {
                    background: "#FF2F82 !important",
                }
            }
        },
        MuiSelect: {
            root: {
                padding: '10px 16px',
                background: 'white',
                border: '0',
                width:'100%',
                height:'22px !important',
                borderRadius: '35px !important',
                '&:focus': {
                    borderColor: '#0082FB',
                },
            },
            icon: {
                padding: "7px"
            }
        },
        MuiOutlinedInput: {
            notchedOutline : {
                border: "none",
            }
        },
        MuiAutocomplete: {
            inputRoot: {
                marginTop: "8px",
                padding: "0px !important"
            }
        }
    },
})

export default theme;
