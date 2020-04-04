
import React, { useEffect } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import { HasDataProps, WithData } from '../../../components/WithData/WithData';
import { useStateValue } from '../../../store/appState';
import { IAction } from '../../../models/IAction';
import { ReservePayload } from '../../../reducer/reserveReducer';
import { Actions } from '../../../actions/Actions';
import { SpecialtyModel } from '../../../models/SpecialtyModel';
import { MainService } from '../../../services/MainService';
import { Urls } from '../../../infrastructure/Helper/urls';
import { DateRange, NightsStay, WbSunny, Alarm } from '@material-ui/icons';
import GridContainer from '../../../components/Grid/GridContainer';
import { MainMenuButton } from '../../MainMenu/MainMenuButton';
import { ReserveModel } from '../../../models/Reserve/ReserveModel';
import { glob } from '../../../infrastructure/Helper/globalVar';
import { DoctorScheduleModel } from '../../../models/DoctorScheduleModel';
import { getPersianDayName } from '../../../infrastructure/Helper/getPersianDayName';
import "../../../infrastructure/ExtensionMethods/String"
import { MeterIcon } from './MeterIcon';
import getResource from '../../../resource/getResource';
import classes from '*.module.css';
const useStyles = makeStyles(theme => (createStyles({

    list: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,

    },
    chip : {
        margin : "0 2px 0 2px"
    }
})
))


const ListDoctorSchedule: React.FC<HasDataProps<DoctorScheduleModel>> = ({ dataSource }): any => {
    const [] = React.useState();
    const classes = useStyles({});
    // const [segments, setSegments] = useState([]);
    const [{ ReserveModel,Resource }, Dispatch] = useStateValue();




    useEffect(() => {



    }, [])


    const setSegment = (id: string) => {


        ReserveModel.DoctorScheduleId = id;
        const date = dataSource.find(d => d.DoctorScheduleId == id)?.GeorgianDate;
        ReserveModel.Date = date || new Date();
        glob.DoctorScheduleId = id;
        const setDoctorScheduleAction: IAction<Actions, ReservePayload> = {
            type: Actions.UPDATERESERVE,
            payload: { reserve: ReserveModel }
        }

        Dispatch(setDoctorScheduleAction);
        const nextStep: IAction<Actions, null> = {

            type: Actions.NEXTSTEP,
            payload: null
        }

        Dispatch(nextStep);
    }


    return (


        <GridContainer>


            {dataSource.filter(d => d.ShiftId == ReserveModel.ShiftId).map((s, i) =>

                <MainMenuButton key={i} onClick={setSegment.bind(null, s.DoctorScheduleId)} >
                    <div>
                        <Chip className={classes.chip} color="primary" icon={<DateRange />} label={`${getPersianDayName(s.Weekday)} ${s.Date}`} />
                        <Chip className={classes.chip} color="primary" icon={s.Shift == "صبح" ? <WbSunny /> : <NightsStay />} label={`${s.Shift}`} />
                        <Chip className={classes.chip} color="primary" icon={<Alarm />} label={`${s.StartTime.normalizeTime()} تا ${s.EndTime.normalizeTime()}`} />
                        <Chip className={classes.chip} color="primary"  icon={<MeterIcon />} label={`${s.RemainedCapacity} ${getResource(Resource).Reserve.Remained} `} />

                    </div>
                </MainMenuButton>


            )}

        </GridContainer>


    )
}


export const DoctorScheduleList = WithData({
    Component: ListDoctorSchedule,
    dataSource: () => MainService.Get<SpecialtyModel>(Urls.Reserve.GetList(glob.DoctorId, glob.ServiceId, glob.SpecialtyId,glob.ShiftId))
});
