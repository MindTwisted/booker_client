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
    },
    getUserById(state) {
        return (id) => {
            return state.users.filter(user => +user.id === +id)[0];
        }
    }
}

export default getters;