import { useCallback, useEffect, useState } from 'react';
import { TableFields } from '../components/Table';

const useTable = (fetchFunction) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [table, setTable] = useState<TableFields[]>(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        setTable(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    fetchFunction,
    setTable,
    setError, 
    setLoading
  ]);
  
  const applyFilter = useCallback((value: string, filterType: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }))
  }, [setFilters]);

  const filteredTable = Object.entries(filters).reduce((acc, [key, value]) => {
    if (value) {
      return acc.filter(item => {
        const tableCellValue = item[key];
        if (key === 'id' || key === 'status') return tableCellValue === value

        return String(tableCellValue).includes(value.trim())
      })
    }

    return acc
  }, table);

  const editCell = useCallback((id: number, type: string, value: string | number) => {
    const editedTable = table.reduce((acc, item) => {
      if (item.id === id) {
        const updatedItem = { ...item };
        updatedItem[type] = value;
        acc.push(updatedItem);
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setTable(editedTable);
  }, [table, setTable])

  return { 
    loading, 
    error, 
    table,
    filteredTable,
    applyFilter,
    editCell
  };
};

export default useTable