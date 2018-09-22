function clearUsers(state) {
    state.users = [];
}

function clearEvents(state) {
    state.events = [];
}

function clearRooms(state) {
    state.rooms = [];
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
        clearRooms(state);
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
    setRooms(state, rooms) {
        state.rooms = rooms;
    },
    deleteRoom(state, id) {
        const index = state.rooms.findIndex(room => +room.id === +id);

        if (index !== -1) {
            state.rooms.splice(index, 1);
        }
    },
}

export default mutations;