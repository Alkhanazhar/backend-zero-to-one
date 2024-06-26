class ErrorHandler extends Error {
    constructor(statusCode, message = "something went wrong", item = null, errors = [], stack = "") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = false;
        this.errors = errors;
        if (stack) { this.stack = stack; }


    }
}
export default ErrorHandler;