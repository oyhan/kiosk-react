import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Card from '../Card/Card';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import { IconButton, Typography, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { numpadStyls } from './numpad.style';
import { NumpadButton } from './NumpadButton';

const useStyle = makeStyles((theme: Theme) => createStyles({
    ...numpadStyls
}))

interface NumpadProps {
    onChange: Function | null;
}

export const MaterialNumpad = forwardRef(({ onChange } :NumpadProps  ,ref ) => {

    const classes = useStyle({});
    const [value, setValue] = useState<string>("");

    // useEffect(()=>{
        

    //     onChange && onChange(value);


    // },[value])
    useImperativeHandle(ref, () => ({

        setInput :(val :any)=>{
            
            setValue(val)
        }
      }));
    const handleChange = (input: any) => {
        
        if (input !== '>'){
            onChange && onChange(value + input);
            setValue(value + input);
        }
            
        else {
            const deleted = value.substring(0,value.length-1)
            
            onChange && onChange(deleted);
            setValue(deleted);
           
        }
       
    }


    return (
        <Card className={classes.card}>
            <div className={classes.row}>
                <NumpadButton onClick={handleChange} value={'3'} />
                <NumpadButton onClick={handleChange} value={'2'} />
                <NumpadButton onClick={handleChange} value={'1'} />
            </div>


            <div className={classes.row}>
                <NumpadButton onClick={handleChange} value={'6'} />
                <NumpadButton onClick={handleChange} value={'5'} />
                <NumpadButton onClick={handleChange} value={'4'} />
            </div>

            <div className={classes.row}>
                <NumpadButton onClick={handleChange} value={'9'} />
                <NumpadButton onClick={handleChange} value={'8'} />
                <NumpadButton onClick={handleChange} value={'7'} />
            </div>
            <div className={classes.row}>
                <NumpadButton onClick={handleChange} value={'>'} />
                <NumpadButton onClick={handleChange} value={'0'} />
                <NumpadButton onClick={handleChange} value={'-'} />
            </div>
        </Card >
    )
})