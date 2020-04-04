
import React, { useEffect, useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ListItemAvatar, Avatar, Button, Chip, Typography } from '@material-ui/core';
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
import { Store, DateRange, Person, EnhancedEncryption, NightsStay, WbSunny, Alarm, Print } from '@material-ui/icons';
import CardFooter from '../../../components/Card/CardFooter';
import CardBody from '../../../components/Card/CardBody';
import GridContainer from '../../../components/Grid/GridContainer';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import { MainMenuButton } from '../../MainMenu/MainMenuButton';
import { ReserveModel } from '../../../models/Reserve/ReserveModel';
import { PlayReserveDay } from '../../../models/Enums/PlayReserveDay';
import { glob } from '../../../infrastructure/Helper/globalVar';
import { DoctorScheduleModel } from '../../../models/DoctorScheduleModel';
import { Redirect } from 'react-router-dom';
import FaceIcon from '@material-ui/icons/Face';
import { getPersianDayName } from '../../../infrastructure/Helper/getPersianDayName';
import "../../../infrastructure/ExtensionMethods/String"
import { DialogHelper } from '../../../components/Dialog/AppDialog';
import SaveFile from '../../../infrastructure/Helper/SaveFile';
import AppLoader from '../../../components/AppLoader/AppLoader';
import { ReserveState } from '../../../models/Enums/ReserveState';
import { ReserveStatusCodeMessage } from '../../../models/Reserve/ReserveStatusCodeHelper';
const useStyles = makeStyles(theme => (createStyles({

    list: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,

    }
})
))



export const ReserveResult = (): any => {


    const [loading, setLoading] = useState(true);

    const [{ ReserveModel, Resource, }, Dispatch] = useStateValue();

    const classes = useStyles({});



    useEffect(() => {
        ReserveModel.ReserveSystemType = 2;

        MainService.Post<ReserveModel>(Urls.Reserve.New, ReserveModel).then(response => {
            
            setLoading(false);
            const status = response.StatusCode as number;
            const reserveState = status as ReserveState;
            
            if (reserveState != ReserveState.SuccessForReserve) {
                var message = ReserveStatusCodeMessage(reserveState, Resource);
                
                DialogHelper.Show("خطا", message);

            }



            // DialogHelper.Show("موفقیت", "رزرو شما با موفقیت ثبت شد");


        }).catch((error) => {
            setLoading(false);
            DialogHelper.Show("خطا", error.Message);
        }

        )


    }, [])





    return (
        loading ?
            <AppLoader />
            : <Typography >
                نوبت شما با موفقیت چاپ شد.
                <Print />
            </Typography>
    )
}


