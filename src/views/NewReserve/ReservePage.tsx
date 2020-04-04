import React, { Fragment, useEffect } from 'react'
import { useStateValue } from '../../store/appState';
import { MainMenuButton } from '../MainMenu/MainMenuButton';
import getResource from '../../resource/getResource';
import { IAction } from '../../models/IAction';
import PageTitleActions from '../../actions/pageTitleActions';
import { PageTitlePayload } from '../../reducer/titleReducer';
import { Router, Route, Switch } from "react-router-dom";
import TodayReserve from './TodayReserve';
import OtherDayReserve from './OtherDayReserve';
import { QueryBuilder, Save } from '@material-ui/icons';




const ReservePage = () => {

    const [{ Settings, Resource }, Dispatch] = useStateValue();


    useEffect(() => {

        const changeTitleAction: IAction<PageTitleActions, PageTitlePayload> = {

            payload: { pageTitle: { Title: getResource(Resource).Reserve.Title } },
            type: PageTitleActions.UPDATE
        }
        // console.log('changeTitleAction: ', changeTitleAction);
        Dispatch(changeTitleAction)

    }, [])

    return (
        <Fragment>





            <MainMenuButton Icon={Save} to="/reserve/today" title={getResource(Resource).Reserve.TodayReserve} />
            <MainMenuButton Icon={QueryBuilder} to="/reserve/otherDay" title={getResource(Resource).Reserve.OtherDaysReserve} />


        </Fragment>
    )
}

export default ReservePage;