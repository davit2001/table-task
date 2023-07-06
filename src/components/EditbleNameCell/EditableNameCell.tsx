import { FC } from 'react';
import TextField from '../TextField';

type EditableDescriptionCellProps = {
  value: string;
  onBlur: () => void;
  id: number;
}

const EditableDescriptionCell: FC<EditableDescriptionCellProps> = ({ value, onBlur, id }) => (
  <TextField
    key={`editable-name-${value}-${id}`}
    initialValue={value}
    onBlur={onBlur}
    type="name"
    placeholder="Filter by Name"
    autoFocus
  />
);

export default EditableDescriptionCell;