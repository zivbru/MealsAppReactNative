import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        coplexlity={itemData.item.coplexlity}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealsDetails',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default MealList;
