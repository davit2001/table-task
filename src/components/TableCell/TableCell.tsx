import { FC, useCallback, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type TableCellProps = {
  CustomCell?: FC;
  EditableCell: FC;
  cellValue?: string;
  id?: number;
  type?: string;
  editCell: (id: number, type: string, value: string) => void;
};

const TableCell: FC<TableCellProps> = ({
  CustomCell,
  EditableCell,
  cellValue,
  id,
  type,
  editCell
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const onEditCell = useCallback((value) => {
    if (!id || !type) return;
    if (!value) return;

    editCell(id, type, value)
  }, [id, type, editCell])

  const onCellClick = useCallback(() => {
    setIsEditable(true);
  }, [setIsEditable]);

  const onCellBlur = useCallback((value) => {
    setIsEditable(false);
    onEditCell(value);
  }, [setIsEditable, onEditCell]);
  
  return (
    <>
      {isEditable ? (
        <EditableCell
          value={cellValue}
          onBlur={onCellBlur}
          id={id}
        />
      ) : (
        <Box className="cell" onClick={onCellClick}>
          {
            CustomCell ? (
              <CustomCell value={cellValue} />
            ) : (
              <Typography>
                {cellValue}
              </Typography>
            )
          }
        </Box>
      )}
    </>
  )
};

export default TableCell;
