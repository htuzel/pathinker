import { takeEvery, put, call } from "redux-saga/effects";
import types from "./types";
import WebClient from "../../helpers/webClient";
import { history } from '../../helpers/history';

function* fetchLogin (data) {
    try {
        console.log('AAAA')
        const response = yield call(WebClient.login, data.payload);
        console.log('response:', response);
        yield put({ type: types.LOGIN_SUCCESS, payload: response });
        history.push('/dashboard');
    } catch (error) {
        yield put({ type: types.LOGIN_FAILURE });
        history.push('/dashboard');
    }
}

export default function* watchRegisterAction() {
    yield takeEvery(types.LOGIN_REQUEST, fetchLogin);
}
