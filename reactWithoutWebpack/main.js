const items = [ 
  "2 lb salmon",
  "5 sprigs fresh rosemary", 
  "2 tablespoons olive oil", 
  "2 small lemons",
  "1 teaspoon kosher salt", 
  "4 cloves of chopped garlic" 
];

const secretIngredients = [
  "1 cup unsalted butter",
  "1 cup crunchy peanut butter",     
  "1 cup brown sugar", 
  "1 cup white sugar", 
  "2 eggs",
  "2.5 cups all purpose flour", 
  "1 teaspoon baking powder", 
  "0.5 teaspoon salt"
];

function IngredientsList({items}) { 
  return React.createElement( 
    "ul",
    { className: "ingredients" }, 
      items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient) 
    )
  ); 
}


const dessert = React.createElement(
  'ul', 
  {className: "ingredients"}, 
  items.map((item, ind) => React.createElement('li', {key: ind}, item)
  )
);
const Ing = React.createElement(
  
)

ReactDOM.render(
  React.createElement(IngredientsList, { items: secretIngredients }, null), 
  document.getElementById("root")
);