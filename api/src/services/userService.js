import user from "../models/User.js"

export default {
    register(email, password) {
        return user.create({ email, password })
    }
}