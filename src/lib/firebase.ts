import * as firebase from 'firebase';
import 'firebase/firestore';
import { ShopsType } from '../types/shop';
import Constants from 'expo-constants';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase.firestore().collection('shops').get();
  const shops = snapshot.docs.map((shop) => shop.data() as ShopsType);
  return shops;
};
