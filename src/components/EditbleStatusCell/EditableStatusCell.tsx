import Status from '../Status/Status';

const EditableStatusCell = ({ value, onBlur, id }) => (
  <Status
    key={`editable-status-${value}-${id}`}
    value={value}
    onBlur={onBlur}
    isOpen
  />
);

export default EditableStatusCell;