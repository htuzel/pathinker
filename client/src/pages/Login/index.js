import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Validate from "../../helpers/validate";
import { useFormik } from "formik";
import { useDispatch, useMappedState } from "redux-react-hook";
import types from "./types";
import Header from "../components/Header";

function Login() {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const { isLogin, user, isLoading, error } = useMappedState(mapState);

    const validationSchema = Yup.object().shape({
        email: Validate.Email(),
        password: Validate.Password()
    });

    const account = {
        email: "hayreddintuzel@gmail.com",
        password: "12345678"
    };

    /* Delete this variable (refactor required) */
    const errorStyle = { padding: "20px 0", color: "red" };

    const formik = useFormik({
        initialValues: account,
        validationSchema,
        onSubmit: values => {
            console.log(values);
            dispatch({ type: types.LOGIN_LOADING });
            dispatch({ type: types.LOGIN_REQUEST, payload: values });
        },
    });
    return (
        <>
        <Header></Header>
        LOGIN
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input name="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <input name="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
            {isLoading && "hiii!"}
            {isLoading}
            {isLogin}
            {user}
            {error}
    </form>

        </>
    );
}

const mapState = state => ({
    isLogin: state.isLogin,
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
});

export default Login;
