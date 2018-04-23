import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Utils from './components/Utils';


beforeAll(() => {
  Utils.answers = ['Red', 'Yellow', 'Blue', 'Orange'];
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should return 0 when all colors are wrong', () => {
  const game = ['Green', 'White', 'Purple', 'Pink'];

  let result = Utils.numberOfGoodColors(game);

  expect(result).toBe(0);

});

it('should return 1 when one color is right', () => {
  const game = ['Red', 'White', 'Purple', 'Pink'];

  let result = Utils.numberOfGoodColors(game);

  expect(result).toBe(1);
});

it('should return 2 when two colors is right', () => {
  const game = ['Red', 'White', 'Yellow', 'Pink'];

  let result = Utils.numberOfGoodColors(game);

  expect(result).toBe(2);
});

it('should return 3 when tree colors are right', () => {
  const game = ['Red', 'Blue', 'Yellow', 'Pink'];

  let result = Utils.numberOfGoodColors(game);

  expect(result).toBe(3);
});

it('should return 4 when all colors are right', () => {
  const game = ['Red', 'Blue', 'Yellow', 'Orange'];

  let result = Utils.numberOfGoodColors(game);

  expect(result).toBe(4);
});

///////////


it('should return 0 when all colors are incorrectly positioned', () => {
  const game = ['Orange', 'Blue', 'Yellow', 'Red'];

  let result = Utils.numberOfGoodPosition(game);

  expect(result).toBe(0);
});

it('should return 1 when one color is correctly positioned', () => {
  const game = ['Red', 'Blue', 'Orange', 'Yellow'];

  let result = Utils.numberOfGoodPosition(game);

  expect(result).toBe(1);
});

it('should return 2 when two colors are correctly positioned', () => {
  const game = ['Red', 'Yellow', 'Orange', 'Blue'];

  let result = Utils.numberOfGoodPosition(game);

  expect(result).toBe(2);
});

it('should return 3 when tree colors are correctly positioned', () => {
  const game = ['Red', 'Yellow', 'Blue', 'White'];

  let result = Utils.numberOfGoodPosition(game);

  expect(result).toBe(3);
});

it('should return 4 when all colors are correctly positioned', () => {
  const game = ['Red', 'Yellow', 'Blue', 'Orange'];

  let result = Utils.numberOfGoodPosition(game);

  expect(result).toBe(4);
});

/////////

it('should return True when all colors are goods and are correctly positioned', () => {
  const game = ['Red', 'Yellow', 'Blue', 'Orange'];

  let result = Utils.isWin(game);

  expect(result).toBe(true);
});

it("should return False when colors or positioning are not correct", () => {
  const first = ['Orange', 'Blue', 'Yellow', 'Red'];
  const second = ['White', 'Yellow', 'Blue', 'Orange'];

  let resultFirst = Utils.isWin(first);
  let resultSecond = Utils.isWin(second);

  expect(resultFirst).toBe(false);
  expect(resultSecond).toBe(false)
});



