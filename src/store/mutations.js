function clearUsers(state) {
    state.users = [];
}

const mutations = {
    setAuth(state, data) {
        state.auth = {
            id: data.id,
            token: data.token,
            name: data.name,
            email: data.email,
            role: data.role
        }
    },
    removeAuth(state) {
        state.auth = {
            id: '',
            token: '',
            name: '',
            email: '',
            role: ''
        };

        clearUsers(state);
    },
    setUsers(state, users) {
        state.users = users;
    },
    deleteUser(state, id) {
        const index = state.users.findIndex(user => +user.id === +id);

        if (index !== -1) {
            state.users.splice(index, 1);
        }
    }
}

export default mutations;