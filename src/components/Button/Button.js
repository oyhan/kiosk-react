import React from 'react';
import { Button } from "@material-ui/core";


export const AppButton = (props) => {


    return (
        <Button variant='outlined' color='secondary' {...props}>
            {props.children}
        </Button>
    )

}