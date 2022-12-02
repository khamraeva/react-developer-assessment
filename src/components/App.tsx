/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PostList from './PostList';
import './App.css';
import useFetch from './hooks/useFetch';
import Filter from './Filter';
import LoadMore from './LoadMore';
import useFilter, { FilteredData } from './hooks/useFilter';

const App: React.FC = () => {
  //to recieve filtered data or increased amount after 'Load more' click I use useFilter custom hook
  const { filteredList, filterData, showCount, increaseShowAmount }: FilteredData = useFilter();
  const data = useFetch();

  return (
    <main className='container'>
      <h2 className='title'>Post list</h2>
      <Filter posts={data} handler={filterData}/>
      {/* if the user clicks, then a filtered list will appear, which will be shown */}
      <PostList posts={(filteredList.length ? filteredList : data).slice(0, showCount)}/>
      {/* 'Load more' button will disappear if all data will be shown */}
      { (filteredList.length || data.length) > showCount && <LoadMore handler={increaseShowAmount}/> }
    </main>
  );
};

export default App;
