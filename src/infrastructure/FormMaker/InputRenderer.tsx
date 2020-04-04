import React, { useState, useEffect, useRef } from "react"
import ReactDOM from 'react-dom';
import { Radio, FormControlLabel, Checkbox, InputAdornment, IconButton, OutlinedInput, Chip } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { VisibilityOff, Visibility } from "@material-ui/icons";
import ValidationTextField from "./ValidationTextField";
import { InputRendererProps, PropType } from "./InputRendererProps";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 300,
        },
    },
};
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginTop: 16
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 220,
    },
    menu: {
        width: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },

}));
export const InputRenderer: React.FC<InputRendererProps> = ({ Name: name, Type: type, Required: required, DisplayName: displayName, DefaultValue: defaultValue,
    DataSource, Disabled, multiple, Hint, Controled, value, ...other }) => {

    const input = useRef(null);
    name = name as string;
    const classes = useStyles({});
    const [state, setState] = useState<any | null>({
        labelWidth: 10,
        [name]: [],
        showPass: false
    })

    // var dataSource = [{text :"" , value : ""}] ;
    var dataSource = DataSource == undefined || DataSource == null ? [{ text: "", value: "" }] : DataSource;


    var InputLabelRef: any = null;

    const getLabel = (value: string) => {
        return dataSource.filter(d => d.value == value)[0].text;
    }
    useEffect(() => {




        if (defaultValue) {


            setState({ [name as string]: defaultValue });
        }
    }, []

    )
    const [] = useState(false);

    const handleClickShowPassword = () => {
        const showPass = !state.showPass;
        setState({ showPass });
    }
    const handleChangeDefault = (event: React.ChangeEvent<HTMLInputElement>) => {

        // if  (props.multiple ){
        //     var arr = state[props.Name];
        //     arr.push(event.target.value);

        //     setState({ [props.Name]: arr });

        // }


        (other as any).onChange && (other as any).onChange(event.target.value);

        // else 
        setState({ [name as string]: event.target.value });
        // props.globalState && props.globalState(props.Name, event.target.value);
    };





    required = required === undefined ? false : required;


    displayName = displayName == null ? name : displayName;
    if (!Controled) {
        Controled = true
    }
    // if (name == 'Id') return null;
    var id = `${name}`;
    switch (type) {
        case PropType.Text:
        case PropType.Guid:
        case PropType.DateTime:

            return (

                <ValidationTextField
                    {...other}
                    onChange={handleChangeDefault}
                    id={id}
                    key={id}
                    label={displayName}
                    className={classes.textField}
                    defaultValue={defaultValue}
                    helperText={Hint}
                    margin="normal"
                    variant="outlined"
                    value={value || state[name]}
                    name={name}
                    required={required}
                    disabled={Disabled}
                    ref={other.refer}

                />


            )

        case PropType.Password:
            return (

                <ValidationTextField
                    {...other}
                    id={id}
                    label={displayName}
                    type={state.showPass ? 'text' : 'password'}
                    name={name}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    required={required}
                    disabled={Disabled}
                    helperText={Hint}
                    className={classes.textField}
                    ref={other.refer}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {state.showPass ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            )
        case PropType.Select:

            if (multiple)
                return (
                    <ValidationTextField
                        {...other}
                        id={id}
                        key={id}
                        select

                        disabled={Disabled}
                        name={name}
                        required={required}
                        label={displayName}
                        className={classes.textField}
                        value={state[name as string]}

                        helperText={Hint}
                        ref={other.refer}

                        onChange={handleChangeDefault}
                        SelectProps={{
                            defaultValue: defaultValue,
                            MenuProps: {
                                MenuProps
                            },
                            multiple: multiple,
                            // value: value,
                            renderValue: (selected: string[]) => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={getLabel(value)} className={classes.chip} />
                                    ))}
                                </div>
                            )
                        }}
                        // helperText="Please select your currency"
                        margin="normal"
                    // variant="outlined"
                    >
                        {dataSource.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.text}
                            </MenuItem>
                        ))}
                    </ValidationTextField>
                )
            else
                return (
                    <ValidationTextField
                        {...other}
                        id={id}
                        key={id}
                        select
                        helperText={Hint}
                        ref={other.refer}

                        disabled={Disabled}
                        name={name}
                        required={required}
                        label={displayName}
                        className={classes.textField}
                        value={state[name]}

                        onChange={handleChangeDefault}
                        // SelectProps={{
                        //     defaultValue: defaultValue,
                        //     MenuProps: {
                        //         className: classes.menu,
                        //     },

                        // }}
                        // helperText="Please select your currency"
                        margin="normal"
                        variant="outlined"
                    >
                        {dataSource.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.text}
                            </MenuItem>
                        ))}
                    </ValidationTextField>
                )

            return (
                <FormControl required={required}

                    margin="normal"
                    variant="outlined"
                    className={classes.formControl}

                >
                    <InputLabel
                        ref={(ref: any) => {
                            InputLabelRef = ref;
                        }}
                        // htmlFor={id}
                        id={id}
                    >
                        {displayName}
                    </InputLabel>
                    <Select
                        disabled={Disabled}
                        defaultValue={defaultValue}
                        margin="normal"
                        required={required}
                        value={state[name as string]}
                        // onChange={handleChange}
                        id={id}
                        labelWidth={state.labelWidth}

                    // variant="outlined"
                    >
                        <MenuItem value="" >Choose one option</MenuItem>
                        {dataSource.map(s =>

                            <MenuItem value={s.value}>{s.text}</MenuItem>


                        )}
                    </Select>
                </FormControl>
            )





        // return (
        //     <FormControl>
        //         <CustomDropDownList
        //             // fields={{ text: 'Name', value: 'Id' }}
        //             dataSource={DataSource}
        //             // allowFiltering={true}
        //             placeholder={displayName}
        //             locale="fa-IR"
        //             name={name}
        //             selectedValue={defaultValue}
        //             value={2}
        //             className={classes.textField}
        //             // readonly={Disabled}
        //             id={id}
        //         // reference={d => dropdown = d}
        //         />
        //     </FormControl>

        // )

        case PropType.Enum:

            return (
                <FormControl
                    required={required}
                    variant="outlined"
                    // className={classes.formControl}
                    fullWidth
                    margin="normal"
                    disabled={Disabled}

                >
                    <InputLabel ref={InputLabelRef}
                        htmlFor="outlined-age-simple">
                        {displayName}
                    </InputLabel>
                    <Select
                        value={state[name]}
                        {...other}
                        labelWidth={state.labelWidth}
                        input={
                            <OutlinedInput
                                labelWidth={state.labelWidth}
                                name={name}
                                id={id}
                            />
                        }

                    >
                        <MenuItem >
                            <em>None</em>
                        </MenuItem>
                        {

                            dataSource.map(s =>

                                // <option value={s.value}>{s.text}</option>
                                <MenuItem value={s.value}>{s.text}</MenuItem>

                            )

                        }

                    </Select>
                </FormControl>
                // <FormControl required={required} margin="normal" fullWidth variant="outlined" /*className={classes.formControl}*/ >
                //     <InputLabel
                // ref={ref => {
                //     InputLabelRef = ref;
                // }}
                //         htmlFor={id}
                //     >
                //         {displayName}
                //     </InputLabel>
                //     <Select

                //         required={required}
                //         value={state[name]}
                //         onChange={handleChange}
                //         input={
                // <OutlinedInput
                //     labelWidth={state.labelWidth}
                //     name={name}
                //     id={id}
                // />
                //         }
                //     >
                //          <option selected value="" >Choose one option</option>    
                //         {/* {DataSource.map(s =>

                //             <option value={s.value}>{s.text}</option>


                //         )} */}
                //     </Select>
                // </FormControl>
            )
        case PropType.Number:
            return (
                <ValidationTextField
                    helperText={Hint}
                    {...other}
                    id={id}
                    key={id}
                    label={displayName}
                    // className={classes.textField}
                    defaultValue={defaultValue}
                    fullWidth
                    // onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    name={name}
                    required={required}
                    type="number"
                    disabled={Disabled}

                />
            )
        case PropType.TextArea:
            return (

                <ValidationTextField
                    onChange={handleChangeDefault}
                    helperText={Hint}
                    {...other}
                    id={id}
                    key={id}
                    label={displayName}
                    // className={classes.textField}
                    // value={value}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                    name={name}
                    required={required}
                    defaultValue={defaultValue}
                    disabled={Disabled}

                />

            )

        // case PropType.RichText:
        //     return (
        //         <Editor placeHolder={DisplayName} label={DisplayName} rows={10} name={Name} />

        //     )
        case PropType.Radio:
            return (

                <FormControlLabel
                    value={defaultValue}
                    control={<Radio id={id} color="primary" />}
                    label={displayName}
                    labelPlacement="start"
                    name={name}
                    defaultValue={defaultValue}
                />

            )
        case PropType.CheckBox:
            return (

                <FormControlLabel
                    value={defaultValue}
                    control={<Checkbox
                        value="true"
                    />}
                    label={displayName}
                    labelPlacement="start"
                    name={name}

                />

            )

        case PropType.Hidden:
            return (

                <input type="hidden"
                    name={name}
                    defaultValue={defaultValue}
                    id={id}
                />



            )

        default:
            return <div></div>;
            break;
    }


}



