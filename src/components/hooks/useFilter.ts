import useFetch from './useFetch';
import usePagination from './usePagination';
import { useState } from 'react';
import { IPost, IShowCount } from '../Interface/Interface';


export interface FilteredData extends IShowCount {
  filteredList: IPost[],
  filterData: (filter: string) => void
}

/* eslint-disable react-hooks/rules-of-hooks */
export default function useFilter(): FilteredData {
  const { showCount, useShowCount, increaseShowAmount, initialShowCount } = usePagination();
  const [ filteredList, useFilteredList ] = useState<IPost[]>([]);
  const data = useFetch();
  const filterData = (filter: string): void => {
    let filtered: IPost[];
    if (filter.length) {
      filtered = data.filter((item: IPost): boolean => {
        // after each filter click show count option resets to default
        useShowCount(initialShowCount);
        return JSON.stringify(item).includes(filter);
      });
    } else {
      // if there isn`t filter ('Clear filters' clicked) function returns all data values
      filtered = data;
      useShowCount(initialShowCount);
    }
    useFilteredList(filtered);
  }

  return { filteredList, filterData, showCount, useShowCount, increaseShowAmount };
}