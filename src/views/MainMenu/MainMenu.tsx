import React, { useEffect, Fragment, useState } from 'react';
import { SettingModel } from '../../models/SettingModel';
import { useStateValue } from '../../store/appState';
import { MainService } from '../../services/MainService';
import { Urls } from '../../infrastructure/Helper/urls';
import SettingActions from '../../actions/settingActions';
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import { IAction } from '../../models/IAction';
import { SettingPayload, settingReducer } from "../../reducer/settingReducer"
import Card from '../../components/Card/Card';
import GridItem from '../../components/Grid/GridItem';
import { MainMenuButton } from './MainMenuButton';
import getResource, { IResource } from '../../resource/getResource';
import { en_US } from '../../resource/en-US';
import { InputRenderer } from '../../infrastructure/FormMaker/InputRenderer';
import { PropType } from '../../infrastructure/FormMaker/InputRendererProps';
import { Language, ResourceAction } from '../../actions/resourceActions';
import { ResourcePayload } from '../../reducer/resourceReducer';
import PageTitleActions from '../../actions/pageTitleActions';
import { PageTitlePayload } from '../../reducer/titleReducer';
import { Check, Save, FormatLineSpacing, FormatListBulleted, ContactSupport, Print } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(2)
        },
        button: {

        }

    }));



export default function MainMenu() {

    const [{ Settings, Resource }, Dispatch] = useStateValue();

    const classes = useStyles({});
    useEffect(() => {

        const changeTitleAction: IAction<PageTitleActions, PageTitlePayload> = {

            payload: { pageTitle: { Title: getResource(Resource).MainMenu.Title } },
            type: PageTitleActions.UPDATE
        }
        // 
        Dispatch(changeTitleAction)

    }, [])



    return (
        <Fragment>
            <GridContainer>
                {
                    Settings.ButtonReserveVisibility && <MainMenuButton Icon={Save} to="/reserve" className={classes.button} title={getResource(Resource).MainMenu.TakeReserve} />

                }
                <MainMenuButton Icon={Check} to="/confirm" className={classes.button} title={getResource(Resource).MainMenu.ConfirmReserve} />
                {
                    Settings.ButtonGetDaySchedulesVisibility &&
                    <MainMenuButton Icon={FormatListBulleted} className={classes.button} title={getResource(Resource).MainMenu.DoctorSchedules} />


                }

                <MainMenuButton Icon={ContactSupport} className={classes.button} title={getResource(Resource).MainMenu.TrackReserve} />
                <MainMenuButton Icon={Print} className={classes.button} title={getResource(Resource).MainMenu.PrintReserve} />



            </GridContainer>






        </Fragment>
    )
}


