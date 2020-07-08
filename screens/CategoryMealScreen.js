import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCat.title,
  };
};

export default CategoryMealScreen;
