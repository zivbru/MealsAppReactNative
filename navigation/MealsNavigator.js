import React from 'react';
import { Platform, Text } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FlitersScreen from '../screens/FlitersScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'sans-serif',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    // another way to set pointer to the scrren
    // we use this when we want to add option params to this obj
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
    // we dont need to use initialRouteName because categories is the first option in
    // createStackNavigator first obj

    // initialRouteName: 'Categories',
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            Meals
          </Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={24} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.seconderyColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            Favorites
          </Text>
        ) : (
          'Favorites'
        ),
    },
  },
};

const mealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        //changes the color of tab bar and we need to change shifiting to false
        // barStyle: {
        //   backgroundColor: Colors.primaryColor,
        // },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          },
          activeTintColor: Colors.seconderyColor,
        },
      });

const filtersNavigator = createStackNavigator(
  {
    Fliters: FlitersScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: '!!!!',
    // },
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const mainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: mealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: { screen: filtersNavigator },
  },
  {
    contentOptions: {
      activeTintColor: Colors.seconderyColor,
      labelStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
    },
  }
);
// before added tabsNavigator
// export default createAppContainer(MealsNavigator);
export default createAppContainer(mainNavigator);
