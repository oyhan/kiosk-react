
import React, { useEffect } from 'react';
import { useStateValue } from '../../store/appState';
import { MainService } from '../../services/MainService';
import { SettingModel } from '../../models/SettingModel';
import { Urls } from '../../infrastructure/Helper/urls';
import { IAction } from '../../models/IAction';
import SettingActions from '../../actions/settingActions';
import { SettingPayload } from '../../reducer/settingReducer';
import { ShiftModel } from '../../models/ShiftModel';






export const ReadSettings = () => {

    const [, Dispatch] = useStateValue();
    function readSettings() {

        MainService.Get<SettingModel>(Urls.Call(Urls.Settings.Get)).then(result => {

            MainService.Get<ShiftModel[]>(Urls.Call(Urls.Shift.Get)).then(shifts => {
                result.Entity.Shifts = shifts.Entity;
                const settingAction: IAction<SettingActions, SettingPayload> = {
                    payload: { setting: result.Entity },
                    type: SettingActions.UPDATE
                }
                Dispatch(settingAction);
            })

        })
    }

    useEffect(() => {

        setInterval(readSettings, 50000)
        readSettings()
    }, [])

    return null;

}