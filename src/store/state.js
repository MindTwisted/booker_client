const state = {
    auth: {
        id: localStorage.getItem('id') || '',
        token: localStorage.getItem('token') || '',
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        role: localStorage.getItem('role') || ''
    },
    users: [],
    events: [],
    rooms: [],
    settings: {
        weekStart: localStorage.getItem('weekStart') ||'monday',
        timeFormat: localStorage.getItem('timeFormat') ||'24h'
    }
}

export default state;