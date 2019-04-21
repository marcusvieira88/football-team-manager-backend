import UnauthorizedError from "../errors/UnauthorizedError";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default class Helpers {

    /**
     * Generate the hash based in a provided value
     * @param value - data for generate hash
     * @return string
     */
    static generateHash(value) {
        return bcrypt.hashSync(value, 12);
    }

    /**
     * Compare hash with a value
     * @param value - value that will be checked
     * @param hash - hash value
     * @return boolean - true if its a hash of
     * the provided value
     */
    static compareHash(value, hash) {
        return bcrypt.compare(value, hash);
    }

    /**
     * Generate a fresh token
     * @param user - user data
     * @return string - fresh token
     */
    static generateToken(user) {
        const userData = {
            userId: user.id,
            userRoles: user.roles
        };
        return jwt.sign(userData, process.env.JWT_SECRET, {
            expiresIn : 60*60*72 //expires in 30 days
        });
    }

    /**
     * Check if user is  Unauthorized, if yes it will thow a error
     * @param context - vgraphqlContext
     */
    static checkUserUnauthorized(context) {
        if (!context.user) {
            throw new UnauthorizedError('User is not authorized!');
        }
    }
}
