import ShopActionTypes from './shop.types';
import shopReducer, {INITIAL_STATE} from './shop.reducer';

describe('shopReducer', () => {
    it('should return initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should set isFetching to true if fetchingCollectionsStart action', () => {
        const reducer = shopReducer(INITIAL_STATE, {type: ShopActionTypes.FETCH_COLLECTIONS_START});
        expect(reducer).toEqual({collections: null, isFetching: true, errorMessage: ''});
        expect(reducer.isFetching).toBe(true);
    });

    it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
        const mockItems = [{id: 1}, {id: 2}];
        const reducer = shopReducer(INITIAL_STATE, {
            type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: mockItems
        });
        expect(reducer).toEqual({...INITIAL_STATE, isFetching: false, collections: mockItems, errorMessage: ''});
        expect(reducer.isFetching).toBe(false);
    });

    it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
        const reducer = shopReducer(INITIAL_STATE, {
            type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: 'error'
        });
        expect(reducer).toEqual({...INITIAL_STATE, isFetching: false, errorMessage: 'error'});
    });
});