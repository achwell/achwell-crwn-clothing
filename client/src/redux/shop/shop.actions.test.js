import ShopActionTypes from './shop.types';
import {
    fetchCollectionsFailure,
    fetchCollectionsStart,
    fetchCollectionsStartAsync,
    fetchCollectionsSuccess
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
    it('should create the fetchCollectionsStart action', () => {
        expect(fetchCollectionsStart()).toEqual({type: ShopActionTypes.FETCH_COLLECTIONS_START});
        expect(fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
    });
});

describe('fetchCollectionsSuccess action', () => {
    it('should create the fetchCollectionsSuccess action', () => {
        const mockCollections = {hats: {id: 1}};
        const action = fetchCollectionsSuccess(mockCollections);
        expect(action).toEqual({type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, payload: mockCollections})
        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
        expect(action.payload).toEqual(mockCollections);
    });
});

describe('fetchCollectionsFailure action', () => {
    it('should create the fetchCollectionsFailure action', () => {
        const action = fetchCollectionsFailure('errored');
        expect(action).toEqual({type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE, payload: 'errored'});
        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
        expect(action.payload).toEqual('errored');
    });
});

describe('fetchCollectionsStartAsync action', () => {
    it('should create the fetchCollectionsStartAsync action', () => {
        const mockActionCreator = fetchCollectionsStartAsync();
        const mockDispatch = jest.fn();
        mockActionCreator(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
    });
});