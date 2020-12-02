import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary:{
        main:"#ebeff5",
        light:"rgba(235, 239, 245, .8)",
        lighter:"rgba(235, 239, 245, .4)",
    },

    secondary:{
        main:"#053858",
        hover:"#042c44",
    },
    danger:{
      main:"#ff0000",
      light:"rgba(255, 0, 0, .2)",
    },
    white:{
      main:"#ffffff",
      light:"rgba(250, 250, 250 .2)",
    },
  },
  typography: {
    fontFamily:"'Poppins', sans-serif"
  }
});
export default theme