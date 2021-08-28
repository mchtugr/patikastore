import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    padding: 10,
    margin: 8,
    borderRadius: 10,
  },
  image_container: {
    backgroundColor: '#fff',
    margin: 5,
    height: 220,
    borderRadius: 10,
  },
  image: {
    height: 220,
    borderRadius: 10,
  },
  text_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  price: {
    marginTop: 5,
    color: '#999',
  },
  stok_alert: {
    color: 'red',
    fontWeight: 'bold',
  },
});
