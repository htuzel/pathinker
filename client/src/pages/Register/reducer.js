import types from "./types";

const initialState = { registered: false, user: {} };

function register(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return { isRegistered: false };
        case types.REGISTER_SUCCESS:
            return { isRegistered: true };
        case types.REGISTER_FAILURE:
            return {
                isRegistered: false,
                error: localStorage.getItem('i18nextLng') === 'en' ? 'Email or password is incorrect' : 'E-posta veya şifre yanlış'
            };
        
        default:
            return state;
    }
}

export default register;
