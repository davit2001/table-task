import { FC } from 'react';
import TextField from '../TextField';

type EditableIdCellProps = {
  value: string;
  onBlur: () => void;
  id: number;
};

const EditableIdCell: FC<EditableIdCellProps> = ({ value, onBlur, id }) => (
  <TextField
    key={`editable-id-${value}-${id}`}
    initialValue={value}
    type="number"
    placeholder="Filter by Id"
    inputProps={{ min: 1 }}
    autoFocus
    onBlur={onBlur}
  />
);

export default EditableIdCell;