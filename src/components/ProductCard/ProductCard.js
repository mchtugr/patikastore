import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './ProductCard.style';

const ProductCard = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{uri: item.imgURL}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {!item.inStock && <Text style={styles.stok_alert}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductCard;
