import cartReducer from './cart-reducer'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart-actions'

describe('aaa', () => {
  test('default state', () => {
    expect(cartReducer(0, { type: '' })).toBe(0)
  })

})

test('cart-reducer > ADD_TO_CART', () => {
  expect(cartReducer(99, { type: ADD_TO_CART })).toBe(100)
})

test('cart-reducer > REMOVE_FROM_CART', () => {
  expect(cartReducer(0, { type: REMOVE_FROM_CART })).toBe(0)
})


// use converage

// test snapshot - dam bao component khong thay doi khi bi render.


