import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Platform} from 'react-native';

export class SecureStorageAdapter {
  static async setItem(key: string, value: string) {
    try {
      if (Platform.OS === 'web') {
        await AsyncStorage.setItem(key, value);
      } else {
        await SecureStore.setItemAsync(key, value);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar la información');
    }
  }

  static async getItem(key: string) {
    try {
      if (Platform.OS === 'web') {
        return await AsyncStorage.getItem(key);
      } else {
        return await SecureStore.getItemAsync(key);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la información');
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      if (Platform.OS === 'web') {
        await AsyncStorage.removeItem(key);
      } else {
        await SecureStore.deleteItemAsync(key);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar la información');
    }
  }
}
