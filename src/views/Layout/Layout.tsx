import React from 'react';
import Card from '../../components/Card/Card';
import GridContainer from '../../components/Grid/GridContainer';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, withRouter } from "react-router-dom";
import MainMenu from '../MainMenu/MainMenu';
import { ConfirmReserve } from '../ConfirmReserve/Confirm';
import { ResourceAction, Language } from '../../actions/resourceActions';
import getResource from '../../resource/getResource';
import { useStateValue } from '../../store/appState';
import { InputRenderer } from '../../infrastructure/FormMaker/InputRenderer';
import { PropType } from '../../infrastructure/FormMaker/InputRendererProps';
import GridItem from '../../components/Grid/GridItem';
import "../../typings/yup/yup.nationalCode"
import { Paper, IconButton, Theme, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ArrowBackSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'
import ReservePage from '../NewReserve/ReservePage';
import { IAction } from '../../models/IAction';
import PageTitleActions from '../../actions/pageTitleActions';
import { PageTitlePayload } from '../../reducer/titleReducer';
import classNames from 'classnames'
import TodayReserve from '../NewReserve/TodayReserve';
import OtherDayReserve from '../NewReserve/OtherDayReserve';
import { Actions } from '../../actions/Actions';

var useStyle = makeStyles((theme: Theme) => (createStyles({
    paper: {
        margin: "50px",
        padding: "15px",
        display: 'flex',
        justifyContent: 'space-between'
    },
    backBtn: {

        width: '70px',
        height: '70px',
        margin: '6px',
        background: theme.palette.primary.dark

    },
    titleBar: {
        height: '70px',
        alignItems: "center",
        background: theme.palette.primary.main

    }
})

))




export const Layout = withRouter(({ children, location }: any) => {

    const [{ PageTitle, Resource, Stepper }, Dispatch] = useStateValue();
    const classes = useStyle({});
    const history = useHistory();


    const handleBackButton = (ev: any) => {
        if (window.location.pathname == '/reserve/today') {
            if (Stepper == 0) history.goBack();
            else {
                const prevStep: IAction<Actions, null> = {

                    type: Actions.PREVSTEP,
                    payload: null
                }

                Dispatch(prevStep);
            }

        }
        else
            history.goBack();
    }


    const changeResource = (event: any) => {

        const resourceAction = {
            payload: { language: event },
            type: ResourceAction.CHANGE
        };
        Dispatch(resourceAction);

    }
    const langs = () => {


        var array = Object.entries(Language);

        return array.map(l => ({ text: l[0], value: l[1] }))
    }
    return (
        // <TransitionGroup>

        //     <CSSTransition
        //         key={location.key}
        //         timeout={{ enter: 300, exit: 300 }}
        //     >
        <GridContainer justify='center'>
            <GridItem xs={12} md={2}>
                <InputRenderer onChange={changeResource} Name="chageLanguage" DisplayName={getResource(Resource).MainMenu.ChangeLanguge} Type={PropType.Select} DataSource={langs()} />

            </GridItem>


            <GridItem xs={12} md={9} >
                <GridItem xs={12} >
                    <Paper className={classNames([classes.titleBar, classes.paper])} elevation={4}>
                        <Typography variant='h4' component={'span'} color='textPrimary'>{PageTitle.Title}</Typography>
                        {

                            window.location.pathname != '/' ?
                                <div>
                                    <IconButton onClick={handleBackButton} className={classes.backBtn}>
                                        <ArrowBackSharp />
                                    </IconButton>
                                </div> : ""


                        }
                    </Paper>
                </GridItem>

                <Paper className={classes.paper} elevation={4}>
                    <Switch>
                        <Route exact path="/" component={MainMenu} />
                        <Route path="/confirm" component={ConfirmReserve} />
                        <Route exact path="/reserve" component={ReservePage} />

                        <Route path="/reserve/today" component={TodayReserve} />
                        <Route path="/reserve/otherDay" component={OtherDayReserve} />

                    </Switch>







                </Paper>

                {children}


            </GridItem>

        </GridContainer>
        //     </CSSTransition>

        // </TransitionGroup>
    )
})

