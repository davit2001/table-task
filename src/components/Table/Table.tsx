import {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactElement
} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import './Table.scss';
import TableContent from '../TableContent';
import NoResultFound from '../NoResultFound';

const createHeaders = (headers) => {
  return headers.map((props) => ({
    ...props,
    ref: useRef(),
  }));
};

export type TableFields = {
  id: number;
  name: string;
  description: string;
  datePicker: string;
  status: string;
};

type TableProps = {
  headers: {
    title: string;
    icon: JSX.Element;
  }[];
  minCellWidth: number;
  table: TableFields[];
  filtersElement: ReactElement,
  editCell: (id: number, type: string, value: string) => void;
  isFetching: boolean;
};

const Table: FC<TableProps> = ({ 
  headers,
  minCellWidth,
  table, 
  filtersElement,
  editCell,
  isFetching
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, index) => {
        if (index === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        ' '
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <Box className="table" ref={tableElement}>
      <Box className="row">
        {columns.map(({ ref, title, icon }, index) => (
          <Box className="tableHeading" ref={ref} key={title}>
            <Box display="flex" gap={1}>
              {icon}
              <Typography>
                {title}
              </Typography>
            </Box>
            <Box
              height="100%"
              onMouseDown={() => mouseDown(index)}
              className={`resize-handle ${
                activeIndex === index ? 'active' : 'idle'
              }`}
            />
          </Box>
        ))}
      </Box>
      <Box className="row">
        {filtersElement}
      </Box>
      {
        !!table && !!table.length ? (
          <TableContent table={table} editCell={editCell} />
        ) : (
          <Box
            sx={{
              display: 'grid',
              margin: 'auto',
              gridColumn: '1 / 6',
              padding: 1
            }}
          >
            {
              isFetching ? (
                <CircularProgress size={48} />
              ) : (
                <NoResultFound />
              )
            }
          </Box>
        )
      }
    </Box>
  );
};

export default Table;
