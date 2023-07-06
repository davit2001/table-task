import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';
import Filters from './components/Filters/Filters';
import Table from './components/Table/Table';
import { getTable } from './services/table.service';
import useTable from './hooks/useTable';

const tableHeaders = [{
  icon: (
    <FormatListNumberedRtlIcon
      sx={{
        color: '#aaaaaa'
      }}
    />
  ),
  title: 'Id',
}, {
  icon: (
    <BadgeIcon
      sx={{
        color: '#aaaaaa'
      }}
    />
  ),
  title: 'Name',
}, {
  icon: (
    <DescriptionIcon
      sx={{
        color: '#aaaaaa'
      }}
    />
  ),
  title: 'Description',
}, {
  icon: (
    <CalendarMonthIcon
      sx={{
        color: '#aaaaaa'
      }}
    />
  ),
  title: 'Date Picker',
}, {
  icon: (
    <FlagIcon
      sx={{
        color: '#aaaaaa'
      }}
    />
  ),
  title: 'Status',
}];

const Home = () => {
  const { filteredTable, loading, applyFilter, editCell } = useTable(getTable)

  return (
    <>
      <Table
        headers={tableHeaders}
        minCellWidth={120}
        table={filteredTable}
        filtersElement={(
          <Filters
            applyFilter={applyFilter}
          />
        )}
        editCell={editCell}
        isFetching={loading}
      />
    </>
  )
};

export default Home;