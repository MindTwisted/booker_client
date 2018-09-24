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
            const index = state.users.findIndex(user => +user.id === +id);

            return index !== -1 ? state.users[index] : {};
        }
    },
    getRoomById(state) {
        return (id) => {
            const index = state.rooms.findIndex(room => +room.id === +id);

            return index !== -1 ? state.rooms[index] : {};
        }
    },
    getEventsSortedByStartTime(state) {
        let localEvents = [...state.events];
        localEvents.sort((a, b) => {
            return a.start_time - b.start_time;
        });
        
        return localEvents;
    }
}

export default getters;