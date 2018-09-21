const getters = {
    isAuth(state) {
        return state.auth.id &&
            state.auth.token &&
            state.auth.name &&
            state.auth.email &&
            state.auth.role;
    },
    isAdmin(state) {
        return state.auth.id &&
            state.auth.token &&
            state.auth.name &&
            state.auth.email &&
            state.auth.role === 'admin';
    }
}

export default getters;