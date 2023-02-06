let inputDirection = { x: 0, y: 0 };
let firstMove = true;

window.addEventListener("keydown", (e) => {
  if ((e.key == "ArrowUp" && inputDirection.x !== 0) || firstMove) {
    inputDirection = { x: 0, y: -1 };
  } else if ((e.key == "ArrowDown" && inputDirection.x !== 0) || firstMove) {
    inputDirection = { x: 0, y: 1 };
  } else if ((e.key == "ArrowLeft" && inputDirection.y !== 0) || firstMove) {
    inputDirection = { x: -1, y: 0 };
  } else if ((e.key == "ArrowRight" && inputDirection.y !== 0) || firstMove) {
    inputDirection = { x: 1, y: 0 };
  }
  firstMove = false;
});

export const getInputDirection = () => {
  return inputDirection;
};
