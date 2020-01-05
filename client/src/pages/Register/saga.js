import { takeEvery, put, call } from "redux-saga/effects";
import types from "./types";
import loginTypes from "../Login/types";
import WebClient from "../../helpers/webClient";
import { history } from '../../helpers/history';

function* fetchRegister (data) {
    try {
        const response = yield call(WebClient.register, data.payload);
        console.log(response);
        if (response.success) {
            sessionStorage.setItem("token", response.token);
            yield put({ type: types.REGISTER_SUCCESS});
            yield put({ type: loginTypes.LOGIN_SUCCESS});
        } else {
            yield put({ type: types.REGISTER_FAILURE });
        }
        history.push('/dashboard');
    } catch (error) {
        yield put({ type: types.REGISTER_FAILURE });
    }
}

export default function* watchRegisterAction() {
    yield takeEvery(types.REGISTER_REQUEST, fetchRegister);
}
