import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -23.423,
        longitude: -46.4445,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
