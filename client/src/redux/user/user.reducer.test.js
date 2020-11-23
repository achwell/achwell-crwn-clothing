import UserActionTypes from './user.types';
import userReducer, {INITIAL_STATE} from './user.reducer';

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should set currentUser to payload on signInSuccess action', () => {
        const mockUser = {id: 1, displayName: 'Axel'};
        const action = {type: UserActionTypes.SIGN_IN_SUCCESS, payload: mockUser};
        const reducer = userReducer(INITIAL_STATE, action);
        const result = {...INITIAL_STATE, currentUser: mockUser, error: null};
        expect(reducer).toEqual(result);
        expect(reducer.currentUser).toEqual(mockUser);
    });

    it('should set currentUser to null on signOutSuccess action', () => {
        const action = {type: UserActionTypes.SIGN_OUT_SUCCESS};
        const reducer = userReducer(INITIAL_STATE, action);
        const result = {...INITIAL_STATE, currentUser: null, error: null};
        expect(reducer).toEqual(result);
        expect(reducer.currentUser).toBe(null);
    });

    it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
        const mockError = {message: 'errored', code: 404};
        expect(userReducer(INITIAL_STATE, {type: UserActionTypes.SIGN_OUT_FAILURE, payload: mockError})).toEqual({...INITIAL_STATE, currentUser: null, error: mockError});
        expect(userReducer(INITIAL_STATE, {type: UserActionTypes.SIGN_OUT_FAILURE, payload: mockError}).error).toBe(mockError);
        expect(userReducer(INITIAL_STATE, {type: UserActionTypes.SIGN_UP_FAILURE, payload: mockError}).error).toBe(mockError);
        expect(userReducer(INITIAL_STATE, {type: UserActionTypes.SIGN_OUT_FAILURE, payload: mockError}).error).toBe(mockError);
    });
});