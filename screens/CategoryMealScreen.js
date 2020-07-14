import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/defaultText';

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availabeMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availabeMeals.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, check your filters!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCat.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
