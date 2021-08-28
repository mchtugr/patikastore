import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = () => {
  const [keyword, setKeyword] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setKeyword}
        value={keyword}
        placeholder="Ara..."
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
