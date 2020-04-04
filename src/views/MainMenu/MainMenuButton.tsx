import React, { useState } from 'react';

import GridItem from '../../components/Grid/GridItem';
import { Button, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';
import { EnhancedEncryption } from '@material-ui/icons';
import CardHeader from '../../components/Card/CardHeader';
import Card from '../../components/Card/Card';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';

export interface MainMenuBttunProps {

    title?: string;
    to?: string;
    [key: string]: any;
    Icon?: any;
}


var useStyle = makeStyles((theme: Theme) => createStyles({
    btn: {
        minHeight: 'inherit',
        fontSize: '20px',
        fontWeight: '500'
    },
    card: {
        minHeight: '120px'
    }
}))

export const MainMenuButton: React.FC<MainMenuBttunProps> = ({ title, to, Icon, ...other }) => {

    const classes = useStyle({});
    return (

        <GridItem xs={12} md={4} >

            <Card className={classes.card}>
                <Button
                    variant='text'
                    {...other}
                    component={Link}
                    to={to as string}
                    className={classes.btn}
                >
                    <CardHeader color="success" stats icon>
                        {
                            Icon && <CardIcon color="success">
                                <Icon />
                            </CardIcon>
                        }
                        {/* <Avatar src={s.Title} /> */}

                    </CardHeader>
                    <CardBody>

                        {title || other.children}
                    </CardBody>
                </Button>
            </Card>


        </GridItem>

    )

}

