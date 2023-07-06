import Box from '@mui/material/Box';
import TableCell from './TableCell';
import EditableIdCell from './EditbleIdCell';
import EditableNameCell from './EditbleNameCell';
import EditableDescriptionCell from './EditbleDescriptionCell';
import EditableDatePickerCell from './EditbleDatePickerCell';
import EditableStatusCell from './EditbleStatusCell';
import StatusChip from './StatusChip';

const TableContent = ({ table, editCell }) => (
  <Box className="tableBody">
    {
      !!table.length && table.map(table => (
        <Box className="row" key={table.id}>
          <TableCell
            EditableCell={EditableIdCell}
            cellValue={table.id}
            id={table.id}
            type="id"
            editCell={editCell}
          />
          <TableCell
            EditableCell={EditableNameCell}
            cellValue={table.name}
            id={table.id}
            type="name"
            editCell={editCell}
          />
          <TableCell
            EditableCell={EditableDescriptionCell}
            cellValue={table.description}
            id={table.id}
            type="description"
            editCell={editCell}
          />
          <TableCell
            EditableCell={EditableDatePickerCell}
            cellValue={table.datePicker}
            id={table.id}
            type="datePicker"
            editCell={editCell}
          />
          <TableCell
            EditableCell={EditableStatusCell}
            cellValue={table.status}
            id={table.id}
            type="status"
            editCell={editCell}
            CustomCell={StatusChip}
          />
        </Box>
      ))
    }
  </Box>
);

export default TableContent;
