import React from 'react';
import "./dashboard.scss"
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getTodos } from '../todo-data';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import  Fade  from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import AddMeeting from "../modal/modal"


const useRowStyles = makeStyles((theme)=>({
  root:{
    borderBottom:"1px solid rgba(224, 224, 224, .1)"
  },

  table: {
    maxWidth: 1100,
    marginLeft:50,
   
  },
  heading:{
    borderLeft:"5px solid" ,
    borderLeftColor:theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    fontSize:18,
    fontWeight:600,
    marginTop:50,
    marginBottom:50, 
    paddingLeft:40,
  },
  paper:{
    borderTopLeftRadius:25,
    marginTop:80,
  },
  edit:{
    color:theme.palette.secondary.main,
    backgroundColor:theme.palette.primary.main,
    cursor:"pointer",
    '&:focus':{
      outlineColor:theme.palette.primary.light,
    },
    '&:hover':{
      color:theme.palette.white.main,
      backgroundColor:theme.palette.secondary.main,
    },
  },
  delete:{
    color:theme.palette.danger.main,
    backgroundColor:theme.palette.danger.light,
    cursor:"pointer",
    '&:focus':{
      outlineColor:theme.palette.danger.light,
    },
    '&:hover':{
      color:theme.palette.white.main,
      backgroundColor:theme.palette.danger.main,
    },
  },
  time:{
    marginTop:16,
    borderRadius:" .5em",
    padding: "8px 10px",
    color:theme.palette.secondary.main,
    backgroundColor:theme.palette.primary.main,
  },
  duration:{
    marginTop:15,
    borderRadius:" .5em",
    padding: "8px 5px",
    color:theme.palette.secondary.main,
    backgroundColor:theme.palette.primary.main,
  },
  name:{
    marginTop:15,
    color:theme.palette.secondary.main,
    fontSize:20,
    fontWeight:600,
  },
  description:{
    color:theme.palette.secondary.main,
    fontSize:14,
    marginTop:-10,
    fontWeight:400,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "50%",
  },
  day:{
    marginTop:10,
    color:theme.palette.secondary.main,
    fontSize:25,
    fontWeight:600,
  },
  month:{
    marginTop:-8,
    color:theme.palette.secondary.main,
    fontSize:18,
    fontWeight:500,
  },
  text:{
    color:theme.palette.secondary.main,
    fontSize:12,
    fontWeight:400,
  },
  agenda:{
    marginTop:15,
    color:theme.palette.secondary.main,
    fontSize:14,
    fontWeight:600,
  },
  more:{
    color:theme.palette.secondary.main,
    '&:focus':{
      outlineColor: theme.palette.primary.lighter
    }
  },

}));

const StyledTableCell = withStyles((theme) => ({ 
  root:{
    borderBottom:"1px solid rgba(224, 224, 224, .1)"
  },
  body: {
    fontSize: 14,
    width:"5px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) =>

  createStyles({
    root: { 
      borderBottom:"1px solid rgba(224, 224, 224, .1)",
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.primary.lighter,
      
      },
      color: "#053858",
     
    },
  }),
)(TableRow);


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
 
  return (
    <React.Fragment>
      <StyledTableRow >
        <StyledTableCell  align="left" >
          <IconButton aria-label="expand row"className={classes.more}  size="small" onClick={() => setOpen(!open)}>
            {open ? <MoreVertIcon className={classes.more} /> : <MoreHorizIcon/> }
          </IconButton>
        </StyledTableCell>
        <StyledTableCell  align="center" component="th" scope="row" >
        <h4 className={classes.day}>{row.date.day}</h4>
       <h6 className={classes.month}>{row.date.month}</h6>
        </StyledTableCell>
        <StyledTableCell align="left" ><h5 className={classes.name}>{row.name}</h5><p className={classes.description}>{row.description}</p></StyledTableCell>
        <StyledTableCell  align="center" ><p  className={classes.time}>{row.startTime}</p></StyledTableCell>
        <StyledTableCell  align="center" ><p  className={classes.time}>{row.EndTime}</p></StyledTableCell>
        <StyledTableCell  align="right" justify="center"> 
          <div className="d-flex justify-content-between">
            <Avatar variant="rounded" className={classes.edit} size="small"> <EditIcon/></Avatar>
            <Avatar variant="rounded" className={classes.delete} size="small" > <DeleteForeverIcon/></Avatar>
          </div>
          </StyledTableCell>
       
      </StyledTableRow>
 <TableCell style={{ paddingBottom: 0, paddingTop: 0, }}  colSpan={6}>
          <Fade in={open} timeout="auto" mountOnEnter unmountOnExit >
            <Box style={{ backgroundColor:"rgba(250, 250, 250, .3)", padding:40}}>
            <Table size="small" aria-label="purchases" style={{ marginLeft:150,  maxWidth: 780 }}>
                <TableHead>
                  <TableRow className={classes.root}>
                    <TableCell className={classes.root} align="left"><p className={classes.text}>AGENDA</p></TableCell>
                    <TableCell className={classes.root} align="center"><p className={classes.text}>DURATION</p></TableCell>
                    <TableCell className={classes.root} ></TableCell>
                  </TableRow>
                </TableHead>
                   <TableBody>
                  {row.agenda.map((agendaRow) => (
                    <TableRow className={classes.root} key={agendaRow.id}>
                      <TableCell className={classes.root} component="th" scope="row" align="left"> 
                        <p className={classes.agenda}>{agendaRow.subAgenda}</p>
                      </TableCell>
                      <TableCell className={classes.root} align="center" ><p className={classes.duration}>{agendaRow.duration}</p></TableCell>
                      <TableCell className={classes.root} align="left"><Button variant="contained" className={classes.delete} disableElevation>Delete</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody> 
              </Table>
            </Box>
          </Fade>
        </TableCell>
      
    </React.Fragment>
  );
}


const row = getTodos();

export default function Dashboard() {
    const classes = useRowStyles();
   
  return (
    <div>
       <Paper elevation={0} className={classes.paper}>
      <TableContainer  className="mt-5 pt-5"  >
          <h5 className={classes.heading}>Here are your Meetings for today.</h5>
        <Table aria-label="collapsible table" size="small" className={classes.table}>
          <TableHead>
            <StyledTableRow >
              <StyledTableCell className={classes.root}/>
              <StyledTableCell/>
              <StyledTableCell/>
              <StyledTableCell align="center"><p className={classes.text}>START TIME</p></StyledTableCell>
              <StyledTableCell align="center"><p className={classes.text}>END TIME</p></StyledTableCell>
              <StyledTableCell />
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <Row className={classes.root} key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      <AddMeeting/>  
    </div>
  );
}


