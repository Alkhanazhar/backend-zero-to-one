export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        fn(req, res, next);
    } catch (error) {
        console.error(error.message, error)
    }
}