import { FC, forwardRef, useCallback, useState } from 'react';
import MuiTextField from '@mui/material/TextField';
import { InputBaseProps } from '@mui/material/InputBase';

type TextFieldProps = {
  initialValue?: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  maxRows?: number;
  placeholder?: string;
  type?: 'text' | 'number';
  inputProps?: InputBaseProps['inputProps'];
  autoFocus?: boolean;
  onBlur?: () => void;
};

const TextField: FC<TextFieldProps> = forwardRef(({
  initialValue = '',
  onChange,
  multiline = false,
  maxRows,
  placeholder,
  type = 'text',
  inputProps = {},
  defaultValue,
  autoFocus = false,
  onBlur
}, ref) => {
  const [value, setValue] = useState(initialValue)
  const onChangeValue = useCallback((event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (onChange) {
      onChange(inputValue);
    }
  }, [setValue, onChange]);

  const onTextBlur = useCallback(() => {
    if (onBlur) {
      onBlur(value);
    }
  }, [value, onBlur]);

  return (
    <MuiTextField
      onBlur={onTextBlur}
      ref={ref}
      value={value}
      onChange={onChangeValue}
      multiline={multiline}
      placeholder={placeholder}
      maxRows={maxRows}
      type={type}
      inputProps={inputProps}
      autoFocus={autoFocus}
    />
  )
});

export default TextField;