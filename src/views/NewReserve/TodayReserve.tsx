import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ShiftList from './Shift/ListShifts';
import { SpecialtyList } from './Specialty/SpecilatyList';
import { useStateValue } from '../../store/appState';
import { DoctorList } from './Doctor/DoctorList';
import { DoctorScheduleList } from './Doctor/DoctorScheduelList';
import { ServiceList } from './Service/ServiceList';
import { IAction } from '../../models/IAction';
import { Actions } from '../../actions/Actions';
import { GetNationalCode } from './GetNationalCode';
import { GetMobileNumber } from './GetMobileNumber';
import { ReserveResult } from './ReserveResult/ReserveResult';
import { Backdrop } from '@material-ui/core';
import { Backspace, ArrowBack, ArrowForward, ArrowForwardIos } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),

    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));



function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <ShiftList />;
        case 1:

            return <SpecialtyList />;
        case 2:
            return <ServiceList />;

        case 3:
            return <DoctorList />;
        case 4:
            return <DoctorScheduleList />;
        case 5:
            return <GetNationalCode />;
        case 6:
            return <GetMobileNumber />;

        case 7:
            return <ReserveResult />;
        default:
            return 'Unknown step';
    }
}

export default function IssueNew() {
    const classes = useStyles({});
    const [errors, setError] = useState<any>([]);
    const [{ ReserveModel, Settings, Stepper: stepper }, Dispatch] = useStateValue();



    const steps = getSteps();


    function getSteps() {
        return [
            { name: "انتخاب شیفت", label: ReserveModel.Shift },
            { name: "انتخاب تخصص", label: ReserveModel.Specialty },
            { name: "انتخاب نوع خدمت", label: ReserveModel.Service },
            { name: "انتخاب پزشک", label: ReserveModel.Doctor },
            { name: "انتخاب روز رزرو", label: ReserveModel.Date },
            { name: "دریافت کدملی", label: ReserveModel.NationalCode },
            { name: "دریافت شماره همراه", label: ReserveModel.MobileNumber },
            { name: "چاپ نوبت", label: ReserveModel.Shift },
        ];
    }

    const handleNext = () => {

        setError([]);
        //اخرین مرحله

        // setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        // setActiveStep(prevActiveStep => prevActiveStep - 1);

        const prevStep: IAction<Actions, null> = {

            type: Actions.PREVSTEP,
            payload: null
        }

        Dispatch(prevStep);
    };
    const getLabelProps = (index: number) => {
        const [error] = errors.filter((e: any) => e.step == index);
        if (error == undefined) return null;
        return {
            optional: <Typography variant="caption" color="error">
                {error.message}
            </Typography>,
            error: true
        }
    }
    const handleReset = () => {
        // setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={stepper} alternativeLabel  >
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel optional={
                            <Typography variant="caption" color="error">
                                {label.label}
                            </Typography>
                        }>{label.name}</StepLabel>

                    </Step>
                ))}
            </Stepper>
            <div>
                <div>{getStepContent(stepper)}</div>
                <div className={classes.actionsContainer}>
                    <div>
                        <Button
                            disabled={stepper === 0}
                            onClick={handleBack}
                            color="primary"
                            endIcon={<ArrowForwardIos />}
                            variant="contained"
                            className={classes.button}
                        >
                            قبلی
                  </Button>
                        {/* <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {stepper === steps.length - 1 ? 'ثبت' : 'بعدی'}
                                    </Button> */}
                    </div>
                </div>
            </div>
            {stepper === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography variant='caption' color='primary'>درخواست شما با موفقیت ثبت شد</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        درخواست جدید
          </Button>
                </Paper>
            )}
        </div>
    );
}
