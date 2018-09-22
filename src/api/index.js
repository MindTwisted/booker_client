import users from './users'
import events from './events'
import rooms from './rooms'

export default {
    ...users,
    ...events,
    ...rooms
}