import { FC, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type DatePickerProps = {
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  initialValue?: string;
  isOpen?: boolean;
};

const dateFormat = 'YYYY-MM-DD';

const DatePicker: FC<DatePickerProps> = ({
  isOpen = false,
  initialValue = null,
  onChange,
  onBlur
}) => {
  const [value, setValue] = useState(initialValue && dayjs(initialValue));
  const [open, setOpen] = useState(isOpen);

  const onChangeDate = useCallback((date) => {
    const formattedDate = date.format(dateFormat);
    setValue(formattedDate);
    onBlur && onBlur(formattedDate);

    if (onChange) {
      onChange(formattedDate);
    }
  }, [onChange, onBlur, setValue]);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback((props) => {
    setOpen(false);
  }, [setOpen, value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        label="Select Date"
        value={value}
        onChange={onChangeDate}
      />
    </LocalizationProvider>
  )
};

export default DatePicker;