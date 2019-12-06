import Queue from '../src/Queue.js'

jest.useFakeTimers()

test('Queue add', () => {
  const fn1 = function (next) { next() }
  const fn2 = function (next) { next() }
  const fn3 = function (next) { next() }
  const fn4 = function (next) { next() }
  let q = new Queue()
  q.add(fn1, fn2, fn3, fn4)
  expect(q.list.length).toBe(4)
})

test('Queue async', () => {
  const drink = jest.fn()
  const fn1 = function (next) { drink(); next() }
  const fn2 = function (next) { drink(); next() }
  const fn3 = function (next) { drink(); next() }
  const fn4 = function (next) { drink(); next() }
  let q = new Queue()
  q.add(fn1, fn2, fn3, fn4).start()
  expect(drink).toHaveBeenCalledTimes(4)
})

test('Queue stop', () => {
  const drink = jest.fn()
  const fn1 = function (next) { drink(); next() }
  const fn2 = function (next) { drink(); next() }
  const fn3 = function (next) { drink(); }
  const fn4 = function (next) { drink(); }
  let q = new Queue()
  q.add(fn1, fn2, fn3, fn4).stop().run()
  expect(drink).toHaveBeenCalledTimes(0)
  q.start().next().next()
  expect(drink).toHaveBeenCalledTimes(4)

  const callback = jest.fn()
  const async = (x) => {
    return (next) => {
      setTimeout(() => {
        callback()
        next()
      }, 1000)
    }
  }
  const q1 = new Queue()
  const funs = '123'.split('').map(x => async(x))
  q1.add(...funs).start()
  expect(callback).not.toBeCalled()
  setTimeout(() => {
    q1.stop()
  }, 1000)
  jest.runOnlyPendingTimers()
  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
  expect(q1.isStop).toBe(true)
  setTimeout(() => {
    q1.start();
  }, 2000)
  jest.runAllTimers();
  expect(callback).toHaveBeenCalledTimes(3)
})

test('Queue limit', () => {
  const drink = jest.fn()
  const fn1 = function (next) { drink(); next() }
  const fn2 = function (next) { drink(); next() }
  const fn3 = function (next) { drink(); next() }
  const fn4 = function (next) { drink(); next() }
  let q = new Queue({limit: 2})
  q.add(fn1, fn2, fn3, fn4).start()
  expect(drink).toHaveBeenCalledTimes(4)
})
