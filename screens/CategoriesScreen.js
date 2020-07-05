import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text> The Categories Screen</Text>
      <Button
        title='Go To Meals!'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
          // we can do also like:
          // props.navigation.navigate('CategoryMeals');
          // or :
          // props.navigation.push('CategoryMeals');
          // replace uses when we dont want the user will have an option to go back like in logon //// screen
          // props.navigation.replace('CategoryMeals');
        }}
      ></Button>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
