import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Validate from "../../helpers/validate";
import { useFormik } from "formik";
import { useDispatch, useMappedState } from "redux-react-hook";
import types from "./types";
import Header from "../components/Header";
//Material UI
import {Avatar, Button, TextField, Checkbox, Grid, Typography, Container, FormControlLabel} from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SPaper, SLink } from "../components/Styled";

function Login() {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const { isLogin, user, isLoading, error } = useMappedState(mapState);

    const validationSchema = Yup.object().shape({
        email: Validate.Email(),
        password: Validate.Password(),
    });

    const account = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues: account,
        validationSchema,
        onSubmit: values => {
            dispatch({ type: types.LOGIN_LOADING });
            dispatch({ type: types.LOGIN_REQUEST, payload: values });
        },
    });
    return (
        <>
        <Header form="login"></Header>
        <Container component="main" maxWidth="sm">
            <SPaper>
            <Grid container justify="center">
                <Avatar >
                    <LockOutlinedIcon />
                </Avatar>
            </Grid>
            <Grid container justify="center" className="mt-2">
                <Typography component="h1" variant="h5" color="primary">
                    {t("login.signin")}
                </Typography>
            </Grid>
            <form onSubmit={formik.handleSubmit} className="px-4 mt-4">
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth
                        {...formik.getFieldProps('email')}
                        placeholder={t('placeholder.email')}
                        error={formik.errors.email && formik.touched.email}
                        helperText={(formik.errors.email && formik.touched.email) && formik.errors.email}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth
                        {...formik.getFieldProps('password')}
                        type="password"
                        placeholder={t('placeholder.password')}
                        error={formik.errors.password && formik.touched.password}
                        helperText={(formik.errors.password && formik.touched.password) && formik.errors.password}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className="mt-5">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                    {t("login.signin")}
                    </Button>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item className="mt-4">
                        <SLink to="/register">
                            {t("login.already")}
                        </SLink>
                    </Grid>
                </Grid>
            </form>
            </SPaper>
        </Container>
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
