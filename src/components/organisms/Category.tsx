import {FlatList} from 'react-native';
import React from 'react';
import Circle_Box from '../molecules/Circle_Box';
import {categoryData} from '../../constants';

const Category = () => {

  const renderItem = ({item}:any) => (
    <Circle_Box img={item.source} text={item.title} />
  );
  return (
    <FlatList
      horizontal
      data={categoryData}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
    />
  );
};

export default Category;
