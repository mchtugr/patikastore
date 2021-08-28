import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar/SearchBar';

import data from './data.json';

const App = () => {
  const onRenderItems = ({item}) => {
    return <ProductCard item={item} />;
  };

  const onKeyExtract = item => {
    return item.id;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={onRenderItems}
        keyExtractor={onKeyExtract}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    margin: 8,
    fontWeight: '800',
    fontSize: 36,
    color: 'purple',
  },
});

export default App;
