import userTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state, 
                currentUser: action.payload,
                error: null,
            }
        case userTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state, 
                error: action.payload
            }
        case userTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;