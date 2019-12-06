import { mul, div, add, sub, isEven, checkBoundary, toFixed, strip, capital} from '../src/Number.js'

test('Number mul', () => {
  let a = Math.round(Math.random() * 100)
  let at = a / 100
  let b = Math.round(Math.random() * 100)
  let bt = b / 100
  let c = (a * b) / 10000
  expect(mul(8.9, 0.8)).toBe(7.12)
  expect(mul(at, bt)).toBe(c)
  expect(mul(at, bt)).toBeCloseTo(at * bt)
});

test('Number div', () => {
  let a = Math.round(Math.random() * 100)
  let at = a / 100
  let b = Math.round(Math.random() * 100)
  let bt = b / 100
  let c = (a / b)
  expect(div(8.2, 0.4)).toBe(20.5)
  expect(div(0.11111, 100)).toBe(0.0011111)
  expect(div(22.333, 100)).toBe(0.22333)
  expect(div(at, bt)).toBeCloseTo(at / bt)
  expect(div(at, bt)).toBeCloseTo(c)
});

test('Number add', () => {
  let a = Math.round(Math.random() * 100)
  let at = a / 100
  let b = Math.round(Math.random() * 100)
  let bt = b / 100
  let c = (a + b) / 100
  expect(add(0.1, 0.2)).toBe(0.3)
  expect(add(at, bt)).toBe(c)
  expect(add(at, bt)).toBeCloseTo(at + bt)
});

test('Number sub', () => {
  let a = Math.round(Math.random() * 100)
  let at = a / 100
  let b = Math.round(Math.random() * 100)
  let bt = b / 100
  let c = (a - b) / 100
  expect(sub(0.76, 0.19)).toBe(0.57)
  expect(sub(at, bt)).toBe(c)
  expect(sub(at, bt)).toBeCloseTo(at - bt)
});

test('Number isEven', () => {
  let a = Math.round(Math.random() * 100)
  expect(isEven(4)).toBe(4 % 2 === 0)
  expect(isEven(a)).toBe(a % 2 === 0)
});

test('Number checkBoundary', () => {
  let a = Math.round(Math.random() * 1000)
  expect(checkBoundary(Number.MAX_SAFE_INTEGER + 1)).toBe(true)
  expect(checkBoundary(Number.MIN_SAFE_INTEGER - 1)).toBe(true)
  expect(checkBoundary(a)).toBe(false)
});

// test('Number capital', () => {
// });

