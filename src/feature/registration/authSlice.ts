import { createSlice } from '@reduxjs/toolkit'

const errors: string[] = []

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        mode: 'signUp',
        agree: false,
        login: '',
        password: '',
        passwordAgain: '',
        errors: errors,
        isAuth: false
    },
    reducers: {
        switchToSignUp: (state) => {
            state.mode = 'signUp'
        },
        switchToSignIn: (state) => {
            state.mode = 'signIn'
        },
        toggleAgree: (state) => {
            state.agree = !state.agree
        },
        validateSignUpForm: (state) => {
            state.errors.length = 0
            if (state.login === '')
                state.errors.push('Поле "Логин" пустое')
            if (state.password === '')
                state.errors.push('Поле "Пароль" пустое')
            if (state.password !== state.passwordAgain)
                state.errors.push('Пароли не совпадают')
            state.isAuth = true;
        },
        validateSignInForm: (state) => {
            state.errors.length = 0
            if (state.login === '')
                state.errors.push('Поле "Логин" пустое')
            if (state.password === '')
                state.errors.push('Поле "Пароль" пустое')
            // TODO: add server query
            state.isAuth = true;
        },
        updateLogin: (state, action: {payload: string}) => {
            state.login = action.payload
        },
        updatePassword: (state, action: {payload: string}) => {
            state.password = action.payload
        },
        updatePasswordAgain: (state, action: {payload: string}) => {
            state.passwordAgain = action.payload
        },
        logout: (state) => {
            state.isAuth = false
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    switchToSignUp, switchToSignIn, toggleAgree, updateLogin, updatePassword, updatePasswordAgain, validateSignUpForm,
    validateSignInForm, logout
} = authSlice.actions
