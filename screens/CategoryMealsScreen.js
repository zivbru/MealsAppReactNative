import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categoty Meals Screen</Text>
      <Button
        title='Go To Meals details!'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealsDetails' });
        }}
      ></Button>
      {/* <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      ></Button> */}
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
