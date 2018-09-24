import api from '../api'

const actions = {
    loginUser(context, data) {
        let token;
        let text;

        return new Promise((resolve, reject) => {
            api.loginUser(data)
                .then(response => {
                    token = response.data.message.data.token;
                    text = response.data.message.text;

                    return api.fetchAuthUser();
                })
                .then(response => {
                    const data = response.data.message.data;

                    context.commit('setAuth', {
                        id: data.id,
                        token: token,
                        name: data.name,
                        email: data.email,
                        role: data.role
                    });

                    localStorage.setItem('id', data.id);
                    localStorage.setItem('token', token);
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('role', data.role);

                    resolve({
                        text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    logoutUser(context) {
        return new Promise((resolve, reject) => {
            const name = context.state.auth.name;

            context.commit('removeAuth');

            localStorage.removeItem('id');
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('role');
            localStorage.removeItem('weekStart');
            localStorage.removeItem('timeFormat');

            resolve({
                text: `User '${name}' was successfully logged out.`
            });
        });
    },
    getUsers(context) {
        return new Promise((resolve, reject) => {
            api.fetchUsers()
                .then(response => {
                    context.commit('setUsers', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text
                    })
                });
        });
    },
    addUser(context, data) {
        return new Promise((resolve, reject) => {
            api.addUser(data)
                .then(response => {
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    updateUser(context, data) {
        return new Promise((resolve, reject) => {
            api.updateUser(data)
                .then(response => {
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    deleteUser(context, id) {
        return new Promise((resolve, reject) => {
            api.deleteUser(id)
                .then(response => {
                    context.commit('deleteUser', id);
                    
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text
                    });
                });
        });
    },
    getEvents(context) {
        return new Promise((resolve, reject) => {
            api.fetchEvents()
                .then(response => {
                    context.commit('setEvents', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text
                    })
                });
        });
    },
    addEvent(context, data) {
        return new Promise((resolve, reject) => {
            api.addEvent(data)
                .then(response => {
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    getRooms(context) {
        return new Promise((resolve, reject) => {
            api.fetchRooms()
                .then(response => {
                    context.commit('setRooms', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text
                    })
                });
        });
    },
    addRoom(context, data) {
        return new Promise((resolve, reject) => {
            api.addRoom(data)
                .then(response => {
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    updateRoom(context, data) {
        return new Promise((resolve, reject) => {
            api.updateRoom(data)
                .then(response => {
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text,
                        data: error.data.message.data
                    });
                });
        });
    },
    deleteRoom(context, id) {
        return new Promise((resolve, reject) => {
            api.deleteRoom(id)
                .then(response => {
                    context.commit('deleteRoom', id);
                    
                    resolve({
                        text: response.data.message.text
                    });
                })
                .catch(error => {
                    reject({
                        text: error.data.message.text
                    });
                });
        });
    },
}

export default actions;