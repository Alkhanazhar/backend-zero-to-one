class ErrorHandler extends Error {
    constructor(statusCode, message = "something went wrong", item = null,errors=[],stack="") {
        this.statusCode = statusCode;
        this.message = message;

    }
}
export default ErrorHandler;