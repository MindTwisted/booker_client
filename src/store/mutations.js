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
    updateEvent(state, payload) {
        const user = state.auth.role === 'admin' ?
            state.users.find(user => +user.id === +payload.data.userId) :
            {
                id: state.auth.id,
                name: state.auth.name,
                email: state.auth.email
            };

        if (!payload.data.recurId) {
            const index = state.events.findIndex(event => +event.id === +payload.data.id);

            state.events[index].description = payload.data.description;
            state.events[index].start_time = payload.data.startTime;
            state.events[index].end_time = payload.data.endTime;
            state.events[index].recur_id = payload.newRecurId;
            state.events[index].user.id = user.id;
            state.events[index].user.name = user.name;
            state.events[index].user.email = user.email;

            return;
        }

        state.events = state.events.map(event => {
            if (+event.id >= +payload.data.id 
                && +event.recur_id === +payload.data.recurId) {
                    const newStartTime = new Date(event.start_time * 1000);
                    const newEndTime = new Date(event.end_time * 1000);

                    newStartTime.setHours((new Date(payload.data.startTime * 1000).getHours()));
                    newStartTime.setMinutes((new Date(payload.data.startTime * 1000).getMinutes()));

                    newEndTime.setHours((new Date(payload.data.endTime * 1000).getHours()));
                    newEndTime.setMinutes((new Date(payload.data.endTime * 1000).getMinutes()));

                    event.description = payload.data.description;
                    event.start_time = newStartTime / 1000;
                    event.end_time = newEndTime / 1000;
                    event.recur_id = payload.newRecurId;
                    event.user.id = user.id;
                    event.user.name = user.name;
                    event.user.email = user.email;
            }

            return event;
        });
    },
    deleteEvent(state, data) {
        if (!data.recurId) {
            const index = state.events.findIndex(event => +event.id === +data.id);

            if (index !== -1) {
                state.events.splice(index, 1);
            }
        }

        state.events = state.events.filter(event => {
            return !(event.id >= data.id && +event.recur_id === +data.recurId);
        });
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