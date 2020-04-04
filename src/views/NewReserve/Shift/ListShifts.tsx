
import React, { useEffect, useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ListItemAvatar, Avatar } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { ShiftModel } from '../../../models/ShiftModel';
import { HasDataProps, WithData } from '../../../components/WithData/WithData';
import { useStateValue } from '../../../store/appState';
import { IAction } from '../../../models/IAction';
import { ReservePayload } from '../../../reducer/reserveReducer';
import { Actions } from '../../../actions/Actions';
import { glob } from '../../../infrastructure/Helper/globalVar';
import SettingActions from '../../../actions/settingActions';
import { SettingPayload } from '../../../reducer/settingReducer';

const useStyles = makeStyles(theme => (createStyles({

    list: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,

    }
})
))



const ShiftList = () => {
    const [selectedId, setSelectedId] = React.useState();

    // const [segments, setSegments] = useState([]);
    const classes = useStyles({});
    // useEffect(() => {
    //     MainService.Get(Urls.Segment.GetAll).then(segs =>
    //         setSegments(segs)
    //     )


    // }, [])

    const [{ ReserveModel, Settings }, Dispatch] = useStateValue();

    const setSegment = (id: string) => {


        ReserveModel.ShiftId = id;
        ReserveModel.Shift = Settings.Shifts.find(s=>s.Id == id)?.Title;
        const setShiftAction: IAction<Actions, ReservePayload> = {
            type: Actions.UPDATERESERVE,
            payload: { reserve: ReserveModel }
        }

        const nextStep: IAction<Actions, null> = {

            type: Actions.NEXTSTEP,
            payload: null
        }

        Dispatch(setShiftAction);

        Dispatch(nextStep);

        setSelectedId(id);

        glob.ShiftId = id;
    }


    return (

        <List className={classes.list} component="nav" aria-label="">
            {
                Settings.Shifts.map((s, i) =>

                    <ListItem key={i}
                        // selected={selectedId === s.Id}

                        id={s.Id} onClick={setSegment.bind(null, s.Id)} button >
                        <Radio
                            checked={selectedId === s.Id}
                        />
                        <ListItemAvatar>

                            <Avatar   src={s.Title} />


                        </ListItemAvatar>
                        <ListItemText primary={s.Title} />
                    </ListItem>
                )
            }


        </List>
    )
}


export default ShiftList;
