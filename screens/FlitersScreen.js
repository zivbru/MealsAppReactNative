import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlitersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Fliters Screen</Text>
    </View>
  );
};

export default FlitersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
