import React, { ReactChild, FC, useRef, useEffect } from "react";
import * as Yup from 'yup';
import { ResponseMessageStatusCode } from '../../models/ResponseMessageModel';
import {
    useFormik
} from 'formik';
import { isValidNationalCode } from "../../infrastructure/Helper/validators";
import { InputRenderer } from "../../infrastructure/FormMaker/InputRenderer";
import { useStateValue } from "../../store/appState";
import getResource from "../../resource/getResource";
import { PropType } from "../../infrastructure/FormMaker/InputRendererProps";
import AppLoader from "../../components/AppLoader/AppLoader";
import { MainService } from "../../services/MainService";
import { Urls } from "../../infrastructure/Helper/urls";
import { AddAlertRounded, ArrowLeft, CheckCircleOutline, CheckCircleRounded, ArrowBackSharp } from "@material-ui/icons";
import { AppButton } from "../../components/Button/Button";
import { AppBar, Paper, Typography, Avatar, IconButton, SvgIcon } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { formstyles } from "../Layout/layout.style";
import GridContainer from "../../components/Grid/GridContainer";
import classNames from "classnames";
import GridItem from "../../components/Grid/GridItem";
import { MaterialNumpad } from "../../components/Numpad/Numpad";
import { DialogHelper } from "../../components/Dialog/AppDialog";
import { IAction } from "../../models/IAction";
import PageTitleActions from "../../actions/pageTitleActions";
import { PageTitlePayload } from "../../reducer/titleReducer";

interface ConfirmForm {
    nationalCode: string;
}


const useStyle = makeStyles(() =>
    createStyles({
        ...formstyles
    }));

export const ConfirmReserve = () => {

    const keyboard = useRef<any>();
    const [{ Resource }, Dispatch] = useStateValue();

    

    useEffect(()=> {


        const changeTitleAction: IAction<PageTitleActions, PageTitlePayload> = {

            payload: { pageTitle: { Title: getResource(Resource).ConfirmReserve.Title } },
            type: PageTitleActions.UPDATE
        }
        // console.log('changeTitleAction: ', changeTitleAction);
        Dispatch(changeTitleAction)
    },[])
    const classes = useStyle({});

    const onSubmit = (e: ConfirmForm) => {
       

        if (!formik.isValid) return;
        MainService.Post<{}>(Urls.Call(Urls.ConfirmReserve + formik.values.nationalCode), {}).then(response => {
            formik.setSubmitting(false);
            if (response.StatusCode == ResponseMessageStatusCode.Success) {
                DialogHelper.Show("", getResource(Resource).ConfirmReserve.Success);

            }
            DialogHelper.Show(getResource(Resource).Warning, response.Message);

            formik.resetForm();
        })

    }
    const formik = useFormik<ConfirmForm>({
        initialValues: {
            nationalCode: "",

        },
        validationSchema: Yup.object({
            nationalCode: Yup.string()
                .required(getResource(Resource).Required).
                nationalCode(getResource(Resource).NationalCode.EnterValidNationalCode)


        }),
        onSubmit: onSubmit,

    })

    const handleChange = (value: any) => {

        formik.setValues({ nationalCode: value })
        formik.handleChange(value);
        keyboard.current.setInput(value);
    }

    return (
        <React.Fragment>


            {(formik.isSubmitting && <AppLoader />) ||



                <GridContainer justify='center'>

                    <form onSubmit={formik.handleSubmit}>
                        <GridItem xs={12}>
                            <InputRenderer autoComplete="off" autoFocus tab="0" value={formik.values.nationalCode} error={formik.errors.nationalCode && true} Type={PropType.Text} Name="nationalCode"
                                DisplayName={getResource(Resource).NationalCode.Title} onChange={handleChange} placeholder={getResource(Resource).ConfirmReserve.PleaseEnterYourNationalCode}
                                Hint={formik.errors["nationalCode"] as string} />

                            <IconButton className={classNames(classes.actionButton, { [classes.hidden]: !formik.isValid })} type='submit' color='primary'>
                                {/* <SvgIcon fontSize='large'>
                                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M15,17h-3l-4-5l4-5h3l-4,5 L15,17z" fill="#5B5B5B" />
                                </SvgIcon> */}
                                <ArrowBackSharp />
                            </IconButton>

                        </GridItem>


                        <GridItem xs={12}>
                            <MaterialNumpad ref={keyboard} onChange={handleChange} />

                        </GridItem>
                    </form>
                </GridContainer>

            }

        </React.Fragment>
    )
}