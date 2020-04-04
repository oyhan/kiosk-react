



import React, { useEffect, useState, useRef } from 'react';
import { useStateValue } from '../../store/appState';
import { MainService } from '../../services/MainService';
import { SettingModel } from '../../models/SettingModel';
import { Urls } from '../../infrastructure/Helper/urls';
import { IAction } from '../../models/IAction';
import SettingActions from '../../actions/settingActions';
import { SettingPayload } from '../../reducer/settingReducer';
import { DialogHelper } from '../Dialog/AppDialog';
import { useHistory } from 'react-router-dom'





export const RestartApp = (): any => {


    const now = new Date();

    const history = useHistory();
    const [shouldRestart, setShouldRestart] = useState(true);
    const [lastTimeTouched, setLastTimeTouched] = useState(now)
    const lastTimeTouchedRef = useRef(lastTimeTouched);
    lastTimeTouchedRef.current = lastTimeTouched;
    const shouldResRef = useRef(shouldRestart);
    shouldResRef.current = shouldRestart;


    const restart = () => {

        
        if (getIdleDuration() > 15000 && window.location.pathname !== '/') {


            history.push("/");

        }
        DialogHelper.Hide();

        // setShouldRestart(true)
    }

    const click_touchHandler = (ev: any) => {



        setLastTimeTouched(new Date());

    }

    const getIdleDuration = (): number => {

        const duration = (new Date() as any) - (lastTimeTouchedRef.current as any);
        

        return duration;
    }

    function preRestart() {
        // setShouldRestart(shouldReset++); 

        if (getIdleDuration() > 15000 && window.location.pathname !== '/') {
            DialogHelper.Show("هشدار", "برنامه درحال ریستارت شدن می باشد", () => { setShouldRestart(false); }, "نه صبر کن !");
            setTimeout(restart, 3000)
        }


    }




    useEffect(() => {


        window.ontouchstart = click_touchHandler;
        window.onclick = click_touchHandler;


        setInterval(() => preRestart(), 1000)

        return () => {
            clearInterval();
            clearTimeout()
        }
    }, [])

    return null;
}