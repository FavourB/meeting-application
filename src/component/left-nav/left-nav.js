import React, { Component } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {withRouter, NavLink} from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';



const Leftnav=() =>{
        const classes=useStyles();
        const itemsList =[ 
            {
                text:"Dashboard",
                icon:<DashboardIcon  style={{ color: '#053858'}}/>,
                onClick:"/dashboard"
            },
            {
                text:"All Agenda",
                icon:<ListAltIcon style={{ color: '#053858'}}  />,
                onClick:"/alltodos",
            },
            {
                text:"Account",
                icon:<PersonIcon style={{ color: '#053858'}}/>,
                onClick:"/account",
            },
            {
                text:"Settings",
                icon:<SettingsIcon style={{ color: '#053858'}} />,
                onClick:"/settings",
            },
        ]
        
        return (  
        <div className={classes.root} style={{position:"fixed", marginTop:160}}>
            <Paper square elevation={0} className={classes.paper}>
                <List className="pt-5 mt-5">
                    {itemsList.map((item, index)=>{
                        const{text, icon, onClick } = item;
                        return( 
                        <NavLink to={onClick} className={classes.listItem}>
                            <ListItem
                            button
                            key={index}
                            >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <Typography  className={classes.listItemText}>{text}</Typography>
                           
                            </ListItem>
                            </NavLink>
                        )
                    })}
                </List>
            </Paper>
    </div> 
    );
}
export default withRouter(Leftnav) 

const useStyles = makeStyles({
    paper:{
        backgroundColor:"#EBEFF5",
        padding:'50px 0',
        width:'260px',
        height:'550px',
    },
    listItemText:{
        fontWeight: 600
    },
    listItem :{
        display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#053858',
      opacity:'.5',

      '&.active' :{
        color: '#053858',
        opacity:'1',
        },

        '&:hover' :{
            color: '#053858',
            textDecoration: 'none',
            opacity:'1'
        }
    },
   
})