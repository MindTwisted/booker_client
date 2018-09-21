function clearUsers(state) {
    state.users = [];
}

function clearEvents(state) {
    state.events = [];
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
        clearEvents(state);
    },
    setUsers(state, users) {
        state.users = users;
    },
    deleteUser(state, id) {
        const index = state.users.findIndex(user => +user.id === +id);

        if (index !== -1) {
            state.users.splice(index, 1);
        }
    },
    setEvents(state, events) {
        state.events = events;
    },
}

export default mutations;