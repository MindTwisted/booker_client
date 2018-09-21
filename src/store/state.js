const state = {
    auth: {
        id: localStorage.getItem('id') || '',
        token: localStorage.getItem('token') || '',
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        role: localStorage.getItem('role') || ''
    }
}

export default state;