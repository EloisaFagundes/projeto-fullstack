import { createMuiTheme } from "@material-ui/core";
    
export default createMuiTheme(
{
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    },

    "background": {
      "paper": "rgba(186, 180, 180, 1)",
      "default": "#fafafa"
    },

    "primary": {
      "light": "rgba(255, 85, 0, 0.67)",
      "main": "rgba(255, 85, 0, 1)",
      "dark": "rgba(0, 0, 0, 1)",
      "contrastText": "rgba(255, 255, 255, 1)"
    },
    
    "secondary": {
      "light": "rgba(56, 115, 166, 1)",
      "main": "rgba(58, 59, 64, 0.94)",
      "dark": "rgba(24, 27, 89, 1)",
      "contrastText": "#fff"
    },

    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },

    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
}
)