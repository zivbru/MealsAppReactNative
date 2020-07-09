import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availabeMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availabeMeals.filter(
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
