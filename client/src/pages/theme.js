import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        htmlFontSize: 18,
    },
    spacing: 8,
    palette: {
        primary: {
            main: '#4A9A57',
        },
        secondary: {
            main: '#B3324C',
        },
    },
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
                    '&:hover': {
                    background: "#000000",
                    }
                }
            }
        },
        MuiFormHelperText: {
            root: {
                color: "#f44336"
            }
        }
    }
})

export default theme;
