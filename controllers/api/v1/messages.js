const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": []
        }
    });
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {
                "user": "John",
                "message": "Hello"
            }
        }
    });
}

module.exports = {
    getAll,
    create
};