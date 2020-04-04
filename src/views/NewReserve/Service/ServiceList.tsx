
import React, { useEffect, useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ListItemAvatar, Avatar, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { HasDataProps, WithData } from '../../../components/WithData/WithData';
import { useStateValue } from '../../../store/appState';
import { IAction } from '../../../models/IAction';
import { ReservePayload } from '../../../reducer/reserveReducer';
import { Actions } from '../../../actions/Actions';
import { SpecialtyModel } from '../../../models/SpecialtyModel';
import { MainService } from '../../../services/MainService';
import { Urls } from '../../../infrastructure/Helper/urls';
import GridItem from '../../../components/Grid/GridItem';
import CardIcon from '../../../components/Card/CardIcon';
import { Store, DateRange, Person, EnhancedEncryption } from '@material-ui/icons';
import CardFooter from '../../../components/Card/CardFooter';
import CardBody from '../../../components/Card/CardBody';
import GridContainer from '../../../components/Grid/GridContainer';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import { MainMenuButton } from '../../MainMenu/MainMenuButton';
import { ReserveModel } from '../../../models/Reserve/ReserveModel';
import { PlayReserveDay } from '../../../models/Enums/PlayReserveDay';
import { glob } from '../../../infrastructure/Helper/globalVar';
import { ServiceModel } from '../../../models/ServiceModel';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => (createStyles({

    list: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,

    }
})
))


var reserveModel: ReserveModel | any = {};
const ListService: React.FC<HasDataProps<ServiceModel>> = ({ dataSource }): any => {

    // const [segments, setSegments] = useState([]);
    const [{ ReserveModel, Settings, }, Dispatch] = useStateValue();

    const classes = useStyles({});



    useEffect(() => {
        reserveModel = ReserveModel;
        // if (dataSource.length == 1) {
        //     ReserveModel.ServiceId = dataSource[0].Id;
        //     glob.ServiceId = dataSource[0].Id;
        //     const nextStep: IAction<Actions, null> = {

        //         type: Actions.NEXTSTEP,
        //         payload: null
        //     }

        //     Dispatch(nextStep);

        // }


    }, [])


    const setSegment = (id: string) => {
        console.log('setService : ', id);


        ReserveModel.ServiceId = id;
        ReserveModel.Service = dataSource.find(s=>s.Id==id)?.Title;
        glob.ServiceId = id;
        const setSpecialtyAction: IAction<Actions, ReservePayload> = {
            type: Actions.UPDATERESERVE,
            payload: { reserve: ReserveModel }
        }

        Dispatch(setSpecialtyAction);
        const nextStep: IAction<Actions, null> = {

            type: Actions.NEXTSTEP,
            payload: null
        }

        Dispatch(nextStep);
    }


    return (


        <GridContainer>


            {dataSource.map((s, i) =>

                <MainMenuButton Icon={EnhancedEncryption} title={s.Title} key={i} onClick={setSegment.bind(null, s.Id)} />


            )}

        </GridContainer>


    )
}


export const ServiceList = WithData({
    Component: ListService,
    dataSource: () => MainService.Get<ServiceModel[]>(Urls.Specialty.GetServices(glob.SpecialtyId))
});
