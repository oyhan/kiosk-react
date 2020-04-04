import React from 'react';
import { Typography, IconButton, Theme, createStyles } from '@material-ui/core';
import { numpadStyls } from './numpad.style';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme : Theme) => createStyles({
    ...numpadStyls
 }))
 interface NumpadProps {
    value : string ;
    onClick : Function |null


 }

export const NumpadButton :React.FC<NumpadProps>= ({ children ,value, onClick  } ) => {

    const classes = useStyle({});

    const handleClick = (e :any ) =>{


      if(onClick) onClick(value);
      
       
    }
    return (
        <div className={classes.btn} >
            <IconButton onClick={handleClick}  color='secondary' className={classes.number}  >
                <Typography variant='h4' >
                  {value}
                </Typography>
            </IconButton>
        </div>
    )
}