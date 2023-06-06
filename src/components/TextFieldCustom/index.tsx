import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

interface CustomTextFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  styleProps?: string;
  placeHolder?: string;
  endAdornment?: JSX.Element;
  type?: string;
}

const CustomTextField = ({
  onChange,
  className,
  styleProps,
  placeHolder,
  endAdornment,
  type,
}: CustomTextFieldProps) => {
  return (
    <TextField
      className={className}
      InputProps={{
        endAdornment: endAdornment,
        className: styleProps,
      }}
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default CustomTextField;
