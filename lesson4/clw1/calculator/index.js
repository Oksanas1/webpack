// file path: calculator/index.js

// экспортируйте sum и mult как именной export

export const sum = (a, b) => {
  console.log('implementation for sum');
  // ... implementation
  return a + b;
};

export const mult = (a, b) => {
  console.log('implementation for mult');
  // ... implementation
  return a * b;
};

// экспортируйте calc как export по умолчанию

export default (expression) => {
  console.log('implementation for calc');
  // ... implementation
  return expression;
};
