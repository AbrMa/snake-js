const gridSize = 21;

export const getRandomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
};

export const outsideGrid = (position) => {
  return (
    position.x <= 0 ||
    position.x > gridSize ||
    position.y <= 0 ||
    position.y > gridSize
  );
};
