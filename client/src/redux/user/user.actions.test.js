import UserActionTypes from './user.types';
import {
    checkUserSession,
    emailSignInStart,
    googleSignInStart,
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutStart,
    signOutSuccess,
    signUpFailure,
    signUpStart,
    signUpSuccess
} from './user.actions';

describe('googleSignInStart action', () => {
    it('should create the googleSignInStart action', () => {
        expect(googleSignInStart()).toEqual({type: UserActionTypes.GOOGLE_SIGN_IN_START});
    });
});

describe('emailSignInStart action', () => {
    it('should create the emailSignInStart action', () => {
        const emailPassword = {email: 'email@email.com', password: 'password'};
        expect(emailSignInStart(emailPassword)).toEqual({
            type: UserActionTypes.EMAIL_SIGN_IN_START,
            payload: emailPassword
        });
    });
});

describe('signInSuccess action', () => {
    it('should create the signInSuccess action', () => {
        const user = {displayname: 'displayname', email: 'email@email.com', password: 'password'};
        expect(signInSuccess(user)).toEqual({type: UserActionTypes.SIGN_IN_SUCCESS, payload: user});
    });
});

describe('signInFailure action', () => {
    it('should create the signInFailure action', () => {
        const error = {message: 'error'};
        expect(signInFailure(error)).toEqual({type: UserActionTypes.SIGN_IN_FAILURE, payload: error});
    });
});

describe('checkUserSession action', () => {
    it('should create the checkUserSession action', () => {
        expect(checkUserSession()).toEqual({type: UserActionTypes.CHECK_USER_SESSION});
    });
});

describe('signOutStart action', () => {
    it('should create the signOutStart action', () => {
        expect(signOutStart()).toEqual({type: UserActionTypes.SIGN_OUT_START});
    });
});

describe('signOutSuccess action', () => {
    it('should create the signOutSuccess action', () => {
        expect(signOutSuccess()).toEqual({type: UserActionTypes.SIGN_OUT_SUCCESS});
    });
});

describe('signOutFailure action', () => {
    it('should create the signOutFailure action', () => {
        const error = {message: 'error'};
        expect(signOutFailure(error)).toEqual({type: UserActionTypes.SIGN_OUT_FAILURE, payload: error});
    });
});

describe('signUpStart action', () => {
    it('should create the signUpStart action', () => {
        const userCredentials = {email: 'email@email.com', password: 'password'};
        expect(signUpStart(userCredentials)).toEqual({
            type: UserActionTypes.SIGN_UP_START,
            payload: userCredentials
        });
    });
});

describe('signUpSuccess action', () => {
    it('should create the signUpSuccess action', () => {
        const user = {displayname: 'displayname', email: 'email@email.com', password: 'password'};
        expect(signUpSuccess({user, additionalData: {}})).toEqual({
            type: UserActionTypes.SIGN_UP_SUCCESS,
            payload: {user, additionalData: {}}
        });
    });
});

describe('signUpFailure action', () => {
    it('should create the signUpFailure action', () => {
        const error = {message: 'error'};
        expect(signUpFailure(error)).toEqual({type: UserActionTypes.SIGN_UP_FAILURE, payload: error});
    });
});
