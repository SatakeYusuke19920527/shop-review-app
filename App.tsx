import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getShops } from './src/lib/firebase';
import { ShopsType } from './src/types/shop';
const App: React.FC = () => {
  const [shops, setShops] = useState<ShopsType[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <View key={index}>
      <Text>{shop.name}</Text>
    </View>
  ));
  return <View style={styles.container}>{shopItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
