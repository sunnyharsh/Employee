import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors, onChange  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const error = errors[field.name];

    return (
        <TextField
            inputProps={{
                style: {
                    color: "#000"
                }
            }}
            margin="dense"
            onChange={true}
            error={touched && error ? true : false}
            helperText={touched && error ? error : null}
            fullWidth
            {...field}
            {...props}
        />
    );
};

export default InputField;
