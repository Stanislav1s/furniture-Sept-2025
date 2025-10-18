import user from "../models/User.js"
import bcrypt from "bcrypt"

export default {
    register(email, password) {
        return user.create({ email, password })
    },
    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Invalid email or password')
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            throw new Error('Invalid email or password')
        }
        return user
    }

}