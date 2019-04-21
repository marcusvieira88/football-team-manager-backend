export default class UnauthorizedError extends Error {
    constructor(message, data) {
        super(message);
        this.name = "UnauthorizedError";
        this.status = 401;
        this.data = data;
    }
}
