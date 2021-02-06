import userTypes from './user.types';

export const setCurrentUser = user => {
    return {
        type: userTypes.setCurrentUser,
        payload: user
    }
}