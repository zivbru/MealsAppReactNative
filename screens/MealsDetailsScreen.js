import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealsDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meals Details Screen</Text>
      <Button
        title='Go to root screen'
        onPress={() => {
          props.navigation.popToTop();
        }}
      ></Button>
    </View>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
