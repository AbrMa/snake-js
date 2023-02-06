import { onSnake, expandSnake } from "./snake.js";
import { getRandomGridPosition } from "./grid.js";

const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition();
  }
  return newFoodPosition;
};

let food = getRandomFoodPosition();
const expansionRate = 1;

export const update = () => {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = getRandomFoodPosition();
  }
};

export const render = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};
