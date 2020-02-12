import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({});

const TrackDetailScreen = ({ navigation }) => (
  <View>
    <Text style={{ fontSize: 48 }}>Track Detail Screen</Text>
    <Button
      title="Go Back To TrackList"
      onPress={() => navigation.navigate('TrackList')}
    />
  </View>
);

export default TrackDetailScreen;
