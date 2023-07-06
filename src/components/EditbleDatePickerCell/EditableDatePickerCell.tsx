import { FC } from 'react';
import DatePicker from '../DatePicker';

type EditableDatePickerCellProps = {
  value: string;
  onBlur: () => void;
  id: number;
};

const EditableDatePickerCell: FC<EditableDatePickerCellProps> = ({ value, onBlur, id }) => (
  <DatePicker
    key={`editable-datePicker-${value}-${id}`}
    initialValue={value}
    onBlur={onBlur}
    isOpen
  />
);

export default EditableDatePickerCell;