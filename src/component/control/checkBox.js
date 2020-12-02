import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import{ Checkbox as MuiCheckbox }from '@material-ui/core';

export default function CheckBox(props) {
    const{name, label, value, onChange} = props
    const onChecked =(name, value)=>({
        target:{
            name, value
        }
    })
    return(
        <FormControl>
            <FormControlLabel
              control={<MuiCheckbox checked={value} onChange={e => onChange(onChecked(name, e.target.checked))} name={name}/>}
              label={label}
            />
        </FormControl>
    )
    
};
