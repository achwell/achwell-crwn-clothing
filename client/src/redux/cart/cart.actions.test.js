import CartActionTypes from './cart.types';
import {addItem, clearCart, clearItemFromCart, removeItem, toggleCartHidden} from './cart.actions';

describe('toggleCartHidden action', () => {
    it('should create the toggleHidden action', () => {
        expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
        expect(toggleCartHidden()).toEqual({type: CartActionTypes.TOGGLE_CART_HIDDEN})
    });
});

describe('addItem action', () => {
    it('should create the addItem action', () => {
        const mockItem = {id: 1};
        const action = addItem(mockItem);
        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);
        expect(action).toEqual({type: CartActionTypes.ADD_ITEM, payload: mockItem});
    });
});

describe('removeItem action', () => {
    it('should create the removeItem action', () => {
        const mockItem = {id: 1};
        const action = removeItem(mockItem);
        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload).toEqual(mockItem);
        expect(action).toEqual({type: CartActionTypes.REMOVE_ITEM, payload: mockItem});
    });
});

describe('clearItemFromCart action', () => {
    it('should create the clearItemFromCart action', () => {
        const mockItem = {id: 1};
        const action = clearItemFromCart(mockItem);
        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem);
        expect(action).toEqual({type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: mockItem});
    });
});

describe('clearCart action', () => {
    it('should create the clearCart action', () => {
        expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
    });
});