import { FC } from 'react';
import TextField from '../TextField';

type EditableDescriptionCellProps = {
  value: string;
  onBlur: () => void;
  id: number;
};

const EditableDescriptionCell: FC<EditableDescriptionCellProps> = ({ value, onBlur, id }) => (
  <TextField
    onBlur={onBlur}
    key={`editable-description-${value}-${id}`}
    initialValue={value}
    type="Filter By Description"
    placeholder="Filter by Description"
    multiline
    maxRows={2}
    autoFocus
  />
);

export default EditableDescriptionCell;