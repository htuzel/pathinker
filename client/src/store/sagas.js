
import watchRegisterAction from "../pages/Register/saga";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchRegisterAction()
    ]);
}
