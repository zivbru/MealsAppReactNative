import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
    // we dont need to use initialRouteName because categories is the first option in
    // createStackNavigator first obj

    // initialRouteName: 'Categories',
  }
);

export default createAppContainer(MealsNavigator);
