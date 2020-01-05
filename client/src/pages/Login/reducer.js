import types from "./types";

const initialState = { isLogin: false, isLoading: false, user: {} };

function login (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_LOADING:
            return { isLoading: true };
        case types.LOGIN_REQUEST:
            return { isLogin: false };
        case types.LOGIN_SUCCESS:
            return { isLogin: true, isLoading: false };
        case types.LOGIN_FAILURE:
            return {
                isLoading: false,
                isLogin: false,
                error: localStorage.getItem('i18nextLng') === 'en' ? 'Email or password is incorrect' : 'E-posta veya şifre yanlış'
            };
        
        default:
            return state;
    }
}

export default login;
