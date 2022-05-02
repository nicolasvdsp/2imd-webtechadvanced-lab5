const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    user: {type: String, required: true},
    message: {type: String, required: true}
});
const Message = mongoose.model('Message', messageSchema);

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
    message.user = "Jane";
    message.message = "Ow hello!"
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