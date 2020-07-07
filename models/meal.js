class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    coplexlity,
    imageUrl,
    duration,
    ingergients,
    steps,
    isGlutinFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.coplexlity = coplexlity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingergients = ingergients;
    this.steps = steps;
    this.isGlutinFree = isGlutinFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
