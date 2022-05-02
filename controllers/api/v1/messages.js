const Message = require('../../../models/Messages');


const getAll = (req, res) => {
    Message.find((err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Could not display your messages"
            });
        }
            
    })
}

const create = (req, res) => {
    let message = new Message();
    message.user = req.body.user;
    message.message = req.body.message;
    message.save( (err, doc) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Could not send a message"
            });
        }
    });
}

module.exports = {
    getAll,
    create
};