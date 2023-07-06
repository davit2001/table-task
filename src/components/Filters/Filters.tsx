import { FC, useCallback } from 'react';
import TextField from '../TextField';
import DatePicker from '../DatePicker';
import Status from '../Status';

type FilterType = 'id' | 'name' | 'description' | 'datePicker' | 'status';

type FiltersProps = {
  applyFilter: (value: string | number, filterType: FilterType) => void;
};

const Filters: FC<FiltersProps> = ({ applyFilter }) => {
  const onChangeId = useCallback(value => {
    applyFilter(Number(value), 'id');
  }, [applyFilter]);

  const onChangeName = useCallback(value => {
    applyFilter(value, 'name');
  }, [applyFilter]);

  const onChangeDescription = useCallback(value => {
    applyFilter(value, 'description');
  }, [applyFilter]);

  const onChangeDatePicker = useCallback(value => {
    applyFilter(value, 'datePicker');
  }, [applyFilter]);

  const onChangeStatus = useCallback(value => {
    applyFilter(value, 'status');
  }, [applyFilter]);

  return (
    <>
      <TextField
        key="filter-by-id"
        type="number"
        onChange={onChangeId}
        placeholder="Filter by Id"
        inputProps={{ min: 1 }}
      />
      <TextField
        key="filter-by-name"
        type="name"
        onChange={onChangeName}
        placeholder="Filter by Name"
      />
      <TextField
        key="filter-by-description"
        type="Filter By Description"
        onChange={onChangeDescription}
        placeholder="Filter by Description"
        multiline
        rows={4}
        maxRows={3}
      />
      <DatePicker onChange={onChangeDatePicker} />
      <Status onChange={onChangeStatus} />
    </>
  )
};

export default Filters;