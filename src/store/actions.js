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
}

export default actions;