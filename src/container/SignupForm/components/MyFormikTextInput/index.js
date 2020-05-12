import React from 'react';
import { useField } from 'formik';
import clsx from 'clsx';
import { get } from 'lodash';
import { InputLabel, Input, FormHelperText, FormControl } from '@material-ui/core';

const MyFormikTextInput = ({ label, classNames, ...props }) => {

  const [field, meta] = useField(props);

  const error = Boolean(meta.touched && meta.error);

  return (
    <FormControl className={clsx(get(classNames, 'formControl', ''))} error={error}>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      <Input
        variant="outlined"
        className={clsx(get(classNames, 'input', ''))}
        {...field}
        {...props}
      >
        {error ? (
          <FormHelperText className={clsx(get(classNames, "error", ''))}>{meta.error}</FormHelperText>
        ) : null}
      </Input>
    </FormControl >
  );
};

export default MyFormikTextInput;