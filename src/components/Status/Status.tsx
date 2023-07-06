import { FC, useCallback, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type StatusProps = {
  value?: string;
  isOpen?: boolean;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
};

const Status: FC<StatusProps> = ({
  value = '',
  isOpen= false,
  onChange,
  onBlur
}) => {
  const [status, setStatus] = useState(value);
  const [open, setOpen] = useState(isOpen);

  const onChangeStatus = useCallback((event) => {
    const option = event.target.value;
    setStatus(option);

    if (onChange) {
      onChange(option);
    }

    onBlur && onBlur(option);
  }, [onChange, onBlur, setStatus]);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <Select
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      value={status}
      onChange={onChangeStatus}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="">
        <em>Select Status</em>
      </MenuItem>
      <MenuItem value="active">Active</MenuItem>
      <MenuItem value="pending">Pending</MenuItem>
      <MenuItem value="cancel">Cancel</MenuItem>
    </Select>
  )
};

export default Status;