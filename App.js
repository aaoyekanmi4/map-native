import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import stores from './MarkerData';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {

  generateMarkerData = () => {
    return stores.features.map((place, index) => 
      <Marker
        key={index}
        description={place.properties.Address}
        title={place.properties.name}
        coordinate={{ latitude: place.geometry.coordinates[1], longitude: place.geometry.coordinates[0] }}
      />
        
    )
   }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 38.909671,
            longitude: -77.034084,
            latitudeDelta: 0.50,
            longitudeDelta: 0.50,
          }}
        >
          {this.generateMarkerData(data)}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
