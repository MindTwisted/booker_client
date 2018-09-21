const getters = {
    isAuth(state) {
        return state.auth.id &&
            state.auth.token &&
            state.auth.name &&
            state.auth.email &&
            state.auth.role;
    }
}

export default getters;