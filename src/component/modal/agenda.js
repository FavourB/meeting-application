import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {fade,withStyles, makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
      agenda: {
        marginLeft: theme.spacing(2),
        color:theme.palette.secondary.main,
        
      },
      agendaDuration: {
        marginLeft: theme.spacing(1),
        color:theme.palette.secondary.main,
        
      },
      wrapper:{
        width:"60em",

      },
      delete:{
        color:theme.palette.danger.main,
        backgroundColor:theme.palette.danger.light,
        // marginLeft: theme.spacing(1),
        marginTop: 8,
        padding:"13px 2px",
        cursor:"pointer",
        '&:focus':{
          outline:"none",
        },
        '&:hover':{
          color:theme.palette.white.main,
          backgroundColor:theme.palette.danger.main,
        },
      },
    
    addAgendaButton: {
        marginLeft:20,
        marginTop: "2rem",
        marginBottom:theme.spacing(4),
        padding:"1rem 2rem",
        fontWeight:700,
        color:theme.palette.secondary.main,
        border:"2px solid #053858",
        backgroundColor:theme.palette.white.main,
        height: "50px",
        borderRadius:" 2em",
        '&:focus':{
            outline:"none",
          },
          '&:hover':{
            color:theme.palette.white.main,
            backgroundColor:theme.palette.secondary.main,
          },
      },
}));

const useStylesReddit2 = makeStyles((theme) => ({
    root: {
      border: '1px solid #fafafa',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.primary.lighter,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '& label': {
        color: theme.palette.secondary.main,
        fontSize: 13,
        fontWeight:"700",
        marginTop:8,
      },
      '& label.Mui-focused': {
        color: theme.palette.secondary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      '&$focused': {
        backgroundColor: theme.palette.primary.lighter,
        color:theme.palette.secondary.main,
        boxShadow: `${fade(theme.palette.primary.main, .5)} 0 0 0 2px`,
        borderColor: theme.palette.secondary.main,
      },
    },
    focused: {},
  }));


  
  function StyledTextField2(props) {
    const classes = useStylesReddit2();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
    }



function Agenda()  {
    const classes=useStyles();

    const [inputList, setInputList] = useState([{
     agenda:"", agendaDuration:"07:30"
    }]);


    const handleChange = (e, index) =>{
      // e.preventDefault;
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name]=value;
      setInputList(list);
    }    

    const handleAddAgenda = () =>{
       // first method
      setInputList([...inputList, {agenda:"", agendaDuration:"07:30"}])
      // or second method
      // const list = [...inputList];
      // list.push({agenda:"", agendaDuration:""});
      // setInputList(list);
    }

    const handleDeleteAgenda = index =>{
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    }


  return (
    <div>
        <Grid container style={{paddingLeft:7}}>
          {inputList.map((item,i) => {
              return(
                <Grid key={i} container spacing={4} className={classes.wrapper}>
                    <Grid item xs={7}>
                        <StyledTextField2
                            id="filled-basic"
                            label="Agenda"
                            className={classes.agenda}
                            fullWidth
                            margin="dense"
                            variant="filled"
                            name="agenda"
                            value={item.agenda}
                            onChange={e => handleChange(e, i)}
                        />
                    
                    </Grid>

                    <Grid item xs={3}>
                        <StyledTextField2
                            id="date"
                            label="AGENDA DURATION"
                            type="time"
                            variant="filled"
                            margin="dense"
                            fullWidth
                            name="agendaDuration"
                            defaultValue="07:30"
                            value={item.agendaDuration}
                            onChange={e => handleChange(e, i)}
                            className={classes.agendaDuration}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    </Grid>  
                    <Grid item xs={1}>
                    <Button variant="rounded" onClick={() => handleDeleteAgenda(i)} className={classes.delete}  > <DeleteForeverIcon/></Button>
                    </Grid>
                  </Grid>       
              )
          })}
        <Button autoFocus onClick={handleAddAgenda} className={classes.addAgendaButton} id="addAgenda">
            Add Agenda
        </Button>
        </Grid> 
        {/* <pre>
          {JSON.stringify(inputList, null, 2)}
        </pre>            */}
    </div>
  );
}


export default Agenda;