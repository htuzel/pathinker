
import watchRegisterAction from "../pages/Register/saga";
import watchLoginAction from "../pages/Login/saga";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchRegisterAction(),
        watchLoginAction()
    ]);
}
