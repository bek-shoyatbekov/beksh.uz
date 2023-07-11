export const errorHandler = (err, req, res) => {
    let stack = {};
    if (err.stack) {
        stack = err.stack;
    }
    res.status(500).json({
        message: err.message,
        stack
    });
    process.exit(1);
};
