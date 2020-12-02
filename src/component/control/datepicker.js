import React from 'react';
import {fade,makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
      color:theme.palette.secondary.main,
    },
}))

const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #fafafa',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#FAFAFA',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '& label': {
        color: "#053858",
        fontSize: 13,
        fontWeight:"700",
        marginTop:8,
      },
      '& label.Mui-focused': {
        color: "#053858",
      },
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        color:theme.palette.secondary.main,
        boxShadow: `${fade(theme.palette.primary.main, .5)} 0 0 0 2px`,
        borderColor: theme.palette.secondary.main,
      },
    },
    focused: {},
  }));


  
  
  function StyledTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
    }

export default function DatePicker(props) {
    const classes = useStyles();

    const{name, label, value, onChange} = props

    const convertToDefEventPara =(name, value)=>({
        target:{
            name, value
        }
    })
    
    return(
     
        <StyledTextField
        label={label}
        fullWidth
        name={name}
        type="date"
        variant="filled"
        // defaultValue="07/11/2020" 
        className={classes.textField}
        // format="MM/dd/yyyy"
        value={value}
        onChange={date =>onChange(convertToDefEventPara(name,date))}
        InputLabelProps={{
        shrink: true,
        }}
    />
    )
    
};
