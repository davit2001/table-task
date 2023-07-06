import { FC } from 'react';
import Status from '../Status/Status';

type EditableStatusCellProps = {
  value: string;
  onBlur: () => void;
  id: number;
};

const EditableStatusCell: FC<EditableStatusCellProps> = ({ value, onBlur, id }) => (
  <Status
    key={`editable-status-${value}-${id}`}
    value={value}
    onBlur={onBlur}
    isOpen
  />
);

export default EditableStatusCell;