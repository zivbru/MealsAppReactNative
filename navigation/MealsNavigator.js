import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  // another way to set pointer to the scrren
  // we use this when we want to add option params to this obj
  CategoryMeals: { screen: CategoryMealsScreen },
  MealsDetails: MealsDetailsScreen,
});

export default createAppContainer(MealsNavigator);
