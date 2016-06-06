/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
class TarshareMap extends React.Component {
  constructor(props){
  super(props)
  this.state ={
    region: {
      longitudeDelta: 0.02145766949155359,
      latitude: 9.64197507929326,
      longitude: 123.8631708624005,
      latitudeDelta: 0.02030836771244537
    },
    LatLng:{
      latitude: 9.64197507929326,
      longitude: 123.8631708624005,
    }
  }
  }


  onRegionChange=(region)=> {
    this.setState({ region });
    console.log(region);
  }


  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
      <MapView style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        <MapView.Marker
          coordinate={this.state.LatLng}
          title={'bohol'}
          description={'Tarshare'}
        />
      </MapView>


    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
    map:{
      width:500,
      height:500
    }
});

AppRegistry.registerComponent('TarshareMap', () => TarshareMap);
