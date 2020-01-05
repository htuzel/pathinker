import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const T = k => {
    const [t] = useTranslation();
    return t(k);
}

export default {
    
    Required() {
        return Yup.string().required(T('validation.required'));
    },
    Text() {
        return Yup.string()
            .min(2, T('validation.tooShort'))
            .max(50, T('validation.tooLong'))
            .required(T('validation.required'));
    },
    Email() {
        return Yup.string()
            .email(T('validation.invalidEmail'))
            .required(T('validation.required'));
    },
    PartnerEmail() {
        return Yup.string()
            .email(T('validation.invalidEmail'));
    },
    Password() {
        return Yup.string()
            .required(T('validation.required'));
            /*.min(8, T('validation.shortPassword'))
            .matches(/[a-zA-Z]/, T('validation.matchPassword'));*/
    },
    LongText() {
        return Yup.string()
            .min(2, T('validation.tooShort'))
            .max(500, T('validation.tooLong'))
            .required(T('validation.required'));
    }
}
