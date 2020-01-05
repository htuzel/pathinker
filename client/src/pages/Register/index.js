import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Validate from "../../helpers/validate";
import { useFormik } from "formik";
import { useDispatch, useMappedState } from "redux-react-hook";
import types from "./types";
import Header from "../components/Header";

function Register() {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const { isRegistered, user, error } = useMappedState(mapState);

    const validationSchema = Yup.object().shape({
        email: Validate.Email(),
        password: Validate.Password()
    });

    const account = {
        email: "hayreddintuzel@gmail.com",
        password: "12345678"
    };

    const onFormSubmit = values => {
        console.log(values);
        dispatch({ type: types.REGISTER_REQUEST, payload: values });
    };

    /* Delete this variable (refactor required) */
    const errorStyle = { padding: "20px 0", color: "red" };

    const formik = useFormik({
        initialValues: account,
        validationSchema,
        onSubmit: values => {
            console.log(values);
            dispatch({ type: types.REGISTER_REQUEST, payload: values });
        },
    });
    return (
        <>
        <Header form="register"></Header>
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
    </form>

        </>
    );
}

const mapState = state => ({
    registered: state.isRegistered,
    user: state.user,
    error: state.error
});

export default Register;
