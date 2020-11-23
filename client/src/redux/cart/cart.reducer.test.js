import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {hidden: true, cartItems: []};

describe('cartReducer', () => {
    it('should return initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it('should toggle hidden with toggleHidden action', () => {
        expect(cartReducer(initialState, {type: CartActionTypes.TOGGLE_CART_HIDDEN}).hidden).toBe(false);
    });

    it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
        const mockItem = {id: 1, quantity: 3};
        const mockPrevState = {hidden: true, cartItems: [mockItem, {id: 2, quantity: 1}]};
        const action = {type: CartActionTypes.ADD_ITEM, payload: mockItem};
        const expected = {hidden: true, cartItems: [{id: 1, quantity: 4}, {id: 2, quantity: 1}]};
        expect(cartReducer(mockPrevState, action).cartItems[0].quantity).toBe(4);
        expect(cartReducer(mockPrevState, action)).toEqual(expected);
    });

    it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
        const mockItem = {id: 1, quantity: 3};
        const mockPrevState = {hidden: true, cartItems: [mockItem, {id: 2, quantity: 1}]};
        const action = {type: CartActionTypes.ADD_ITEM, payload: mockItem};
        const expected = {hidden: true, cartItems: [{id: 1, quantity: 4}, {id: 2, quantity: 1}]};
        expect(cartReducer(mockPrevState, action).cartItems[0].quantity).toBe(4);
        expect(cartReducer(mockPrevState, action)).toEqual(expected);
    });

    it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
        const mockItem = {id: 1, quantity: 3};
        const mockPrevState = {hidden: true, cartItems: [mockItem, {id: 2, quantity: 1}]};
        const action = {type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: mockItem};
        const expected = {hidden: true, cartItems: [{id: 2, quantity: 1}]};
        expect(cartReducer(mockPrevState, action).cartItems[0].quantity).toBe(1);
        expect(cartReducer(mockPrevState, action).cartItems.includes(item => item.id === 1)).toBe(false);
        expect(cartReducer(mockPrevState, action)).toEqual(expected);
    });

    it('should clear cart if clearCart action fired', () => {
        const mockPrevState = {hidden: true, cartItems: [{id: 1, quantity: 3}, {id: 2, quantity: 1}]};
        expect(cartReducer(mockPrevState, {type: CartActionTypes.CLEAR_CART}).cartItems.length).toBe(0);
        expect(cartReducer(mockPrevState, {type: CartActionTypes.CLEAR_CART})).toEqual({cartItems: [], hidden: true});
    });
});