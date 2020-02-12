import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({});

const TrackListScreen = ({ navigation }) => (
  <View>
    <Text style={{ fontSize: 48 }}>Track List Screen</Text>
    <Button
      title="Go to Track Detail"
      onPress={() => navigation.navigate('TrackDetail')}
    />
  </View>
);

export default TrackListScreen;
