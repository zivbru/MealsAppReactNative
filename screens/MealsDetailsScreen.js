import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/defaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((fav) => fav.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  //usecallback takecare that this function will not recreated  and not  render the page again unless one of the params will change like mealId
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  // we need to pass tyhe title to navigation and use effect is one of them and it's not good
  // solution
  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsFavorite,
    });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.coplexlity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>ingergients</Text>
      {selectedMeal.ingergients.map((ing, index) => (
        <ListItem key={index}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId');
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Favorite'
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    },
  };
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  screen: {},
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  title: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
