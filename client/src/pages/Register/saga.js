import { takeEvery, put, call } from "redux-saga/effects";
import types from "./types";
import WebClient from "../../helpers/webClient";
import { history } from '../../helpers/history';

function* fetchRegister (data) {
    try {      
        const response = yield call(WebClient.register, data.payload);
        console.log(response);
        yield put({ type: types.REGISTER_SUCCESS, payload: response });
        history.push('/dashboard');
    } catch (error) {
        yield put({ type: types.REGISTER_FAILURE });
        history.push('/dashboard');
    }
}

export default function* watchRegisterAction() {
    yield takeEvery(types.REGISTER_REQUEST, fetchRegister);
}
