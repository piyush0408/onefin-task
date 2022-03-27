import React from 'react';
import './Main.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core';
import './Post.css'
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));




function Post() {
    
    const classes = useStyles();


    return (
        
        <div className="main_post">
              <div className="main_post_header">
              <div className="parent">
              <Avatar alt="PI" src="data:image/jpeg;base64,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" 
              className={classes.small} /> < p className="post_username"> John Salvatore </p></div>
              
              </div>
              
               <div className="post_pic_container">
                    <img src="data:image/jpeg;base64,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"
                    alt="" className="post_pic"/>
               </div>
              
               <div className="main_post_icons">
                   
                   <div className="main_post_icon"> <button className="main_post_icon_button"><ThumbUpAltIcon className="ThumbUpAltIcon"/></button>
                   </div>
                  
                   <div className="main_post_icon">  <button className="main_post_icon_button"><ThumbDownAltIcon className="ThumbDownAltIcon" /></button>
                   </div>

                    <div className="main_post_icon">  <button className="main_post_icon_button"><SendIcon/></button>
                   </div>
               
               </div>
            
            
            </div>
            
       
    )
}

export default Post
