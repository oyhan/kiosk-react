import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppLoader from '../AppLoader/AppLoader';
import { ResponseMessageModel } from '../../models/ResponseMessageModel';
import nothing from "./nothing.png"
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
export interface WithDataProps<T> {
    Component: React.ComponentType<HasDataProps<T>>;
    dataSource: any;
}

export interface HasDataProps<TArray> {

    dataSource: TArray[];
}
const styles = (theme : Theme) => (createStyles({

    images: {
        [theme.breakpoints.down('md')]:{
            width: '500px'
        },
        [theme.breakpoints.down('xs')]:{
            width: '300px'
        },
        [theme.breakpoints.between('xs','md')]:{
            width: '400px'
        }
        
       
    }
}
))
export function WithData<T>({ Component, dataSource }: WithDataProps<T>) {
    
    return withStyles(styles) (class extends React.Component<any> {

       
        state = {
            loading: true,
            data: []

        }
        classes = this.props.classes;


        componentDidMount() {
            if (typeof dataSource == 'function')
                dataSource().then((r: ResponseMessageModel<T>) => {


                    this.setState({ data: r.Entity, loading: false });


                })
            else
                dataSource.then((r: ResponseMessageModel<T>) => {

                    this.setState({ data: r.Entity, loading: false });

                })

        }

        render() {
            return (
                (this.state.loading &&
                    <AppLoader />
                ) ||
                (
                    this.state.data.length == 0 ?
                        <img className={this.classes.images} src={nothing} /> :
                        <Component dataSource={this.state.data} {...this.props} />
                )




            )
        }
    }
)}