import React, { Fragment, useEffect } from 'react'
import { useStateValue } from '../../store/appState';
import { MainMenuButton } from '../MainMenu/MainMenuButton';
import getResource from '../../resource/getResource';
import { IAction } from '../../models/IAction';
import PageTitleActions from '../../actions/pageTitleActions';
import { PageTitlePayload } from '../../reducer/titleReducer';
import { Router, Route, Switch } from "react-router-dom";




const OtherDayReserve = () => {

    const [{ Settings, Resource }, Dispatch] = useStateValue();


    useEffect(() => {

        const changeTitleAction: IAction<PageTitleActions, PageTitlePayload> = {

            payload: { pageTitle: { Title: getResource(Resource).Reserve.OtherDaysReserve } },
            type: PageTitleActions.UPDATE
        }
        // console.log('changeTitleAction: ', changeTitleAction);
        Dispatch(changeTitleAction)

    }, [])

    return (
        <Fragment>




            <div>Other day reserve</div>



        </Fragment>
    )
}

export default OtherDayReserve;