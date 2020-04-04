import React, { createContext, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions ,DialogContentText } from '@material-ui/core';
import { AppButton } from '../Button/Button';
import getResource from '../../resource/getResource';
import { useStateValue } from '../../store/appState';



let controlDialog;


export default function AppDialog() {
    const initState = {
        open : false ,
        dialogContent : "",
        dialogTitle : "",
        cancelAction :null,
        cancelActionTitle:""

    }
    const [{Resource},] = useStateValue();
    const [state, setState] = React.useState(initState);

    useEffect(()=> {
        controlDialog = setState;
    },[])
    const handleClickOpen = () => {
        setState({open : true});
      };
      
      const handleClose = () => {
        setState({open : false});
        state.cancelAction && state.cancelAction();
      };

      const ok = ()=>{
        setState({open : false});

      }
    return (
        <Dialog
            open={state.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{state.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {
                        state.dialogContent
                    }
                 </DialogContentText>
            </DialogContent>
            <DialogActions>
                <AppButton onClick={ok} color="primary">
                    {
                        getResource(Resource).Ok
                    }
                </AppButton>
                {
                 state.cancelAction && 
                 <AppButton onClick={handleClose} color="primary">
                    {
                        state.cancelActionTitle
                    }
                </AppButton>
                }
               
            </DialogActions>
        </Dialog>
    )


}

export const DialogHelper = {
    Show : function(title,content,cancelAction,cancelActionTitle){
        
        controlDialog({
            dialogContent : content ,
            dialogTitle : title,
            open : true,
            cancelAction,
            cancelActionTitle
        });
    } ,

    Hide : function() {
        controlDialog({
            open : false
        })
    }
}

