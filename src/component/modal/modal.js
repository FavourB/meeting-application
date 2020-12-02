import React, { useState, useEffect}from 'react';
import {fade,makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Agenda from './agenda';
import Grid from '@material-ui/core/Grid';
import Controls from './../control/control';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    backgroundColor:theme.palette.secondary.main,
    color: theme.palette.white.main,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.white.main,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding:0,
    backgroundColor:theme.palette.primary.main,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
  },
}))(MuiDialogActions);

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
 
      
const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: "55rem",
        marginTop: "2rem",
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.secondary.main,
        height: "50px",
        width:"20em",
        borderRadius:" 2em",
        '&:focus':{
            outline:"none",
          },
          '&:hover':{
            backgroundColor:theme.palette.secondary.hover,
          },
      },
      savebutton: {
        marginLeft: "52rem",
        marginTop: "2rem",
        padding:"1.5rem 3rem",
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.secondary.main,
        height: "50px",
        borderRadius:" 2em",
        '&:focus':{
            outline:"none",
          },
          '&:hover':{
            backgroundColor:theme.palette.secondary.hover,
          },
      },
      
      container: {
        marginTop:theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginBottom:theme.spacing(1),
        width:"55em"
      },
      textField: {
        color:theme.palette.secondary.main,
      },
      
      meetingDetails: {
        color:theme.palette.secondary.main,
        marginBottom:theme.spacing(2),
        width:"55em"
        
      },
      agendaContainer:{
        marginTop:theme.spacing(1),
        backgroundColor:theme.palette.white.main,
        width:"60em"
      },

}))

const initialValues ={
  id: 0,
  date:new Date(),
  startTime:"",
  totalDuration:"",
  endTime:"",
  meetingTitle:"",
  meetingDescription:"",
  agenda:"",
  agendaDuration:"",
  automaticTimeCalculation: true,

}
  

export default function AddMeeting() {
  const [open, setOpen] = React.useState(false);
 

  const handleClose = () => {
    setOpen(false);
  };
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const classes = useStyles();
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('md');


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

   const [values, setValues] = useState(initialValues); 
   const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]:value
    })
   }

  return (
    <div>
      <Fab
        className={classes.button}
        variant="extended"
        onClick={handleClickOpen('paper')}>
         <AddIcon /> Create New Meeting
      </Fab>
      <Dialog
       onClose={handleClose} 
       className={classes.dialog}
       fullWidth={fullWidth}
       maxWidth={maxWidth}
    //    aria-labelledby="customized-dialog-title" 
       open={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Meeting
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <form noValidate>
            <Grid container direction="row" spacing={1} justify="space-between" className={classes.container} noValidate>
              <Grid item xs={3}>
                <Controls.DatePicker
                    id="date"
                    label="DATE"
                    fullWidth
                    name="date"
                    type="date"
                    variant="filled"
                    value={values.date}
                    defaultValue="2020-10-17" 
                    className={classes.textField}
                    onChange = {handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
              </Grid>
              <Grid item xs={3}>
                <form noValidate>
                <Controls.TimePicker
                  id="date"
                  label="START TIME"
                  name=" startTime"
                  type="time"
                  variant="filled"
                  fullWidth
                  value={values.startTime}
                  onChange = {handleInputChange}
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300, // 5 min
                  }}
                /></form>
              </Grid>
              <Grid item xs={3}>
                 
                <Controls.TimePicker
                    id="date"
                    label="PLEASE SET DURATION"
                    type="time"
                    name="totalDuration"
                    variant="filled"
                    fullWidth
                    value={values.totalDuration}
                    defaultValue="07:30"
                    className={classes.textField}
                    onChange = {handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
              </Grid>
              <Grid item xs={3}>
                <Controls.TimePicker
                  id="date"
                  label="END TIME"
                  type="time"
                  name=" endTime"
                  fullWidth
                  variant="filled"
                  value={values.endTime}
                  defaultValue="07:30"
                  className={classes.textField}
                  onChange = {handleInputChange}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300, // 5 min
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
                <StyledTextField
                 id="filled-basic"
                label="Meeting Title"
                name="meetingTitle"
                value={values.meetingTitle}
                className={classes.meetingDetails}
                onChange = {handleInputChange}
                fullWidth
                margin="dense"
                variant="filled"
                /> 
            </Grid>
            <Grid container className={classes.container}>
                <StyledTextField
                id="standard-textarea"
                className={classes.meetingDetails}
                onChange = {handleInputChange}
                multiline
                name="meetingDescription"
                label="Meeting Description"
                value={values.meetingDescription}
                fullWidth
                margin="dense"
                variant="filled"
                />
            </Grid>
        
            <Grid container className={classes.agendaContainer} noValidate>
              <Controls.CheckBox
              name="automaticTimeCalculation"
              label="My total duration should be automatically calculated"
              value={values.automaticTimeCalculation}
              onChange = {handleInputChange}
              />
              <Agenda/>
            </Grid>
          </form>
          <pre>
          {JSON.stringify(values, null, 2)}
        </pre>           
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className={classes.savebutton} >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
