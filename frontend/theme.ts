import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#4683d9'
        }
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: 8
            }
        },
        MuiButton: {
            root: {
                borderRadius: '8px'
            },
            contained: {
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white'
                }
            },
            containedPrimary: {
                backgroundColor: '#4683d9',
                '&:hover': {
                    backgroundColor: '#437CCE'
                }
            }
        }
    }
})