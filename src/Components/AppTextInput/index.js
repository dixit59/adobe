import React from 'react';
import { TextField } from '@material-ui/core';

const AppTextInput = ({

  name,
  id,
  type,
  value,
  onChange,
  variant,
  placeholder,
  ...rest
}) => {

  return (
    <TextField
      {...rest}
      type={type}
      name={name}
      id={id || name}
      size={'small'}
      fullWidth={true}
      value={value}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      className='mb-5'
    />
  );
};


export default AppTextInput;
