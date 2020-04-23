const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        event: {
            type: String
        },
        sender: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

let ServerEvent = mongoose.model("EventIn", eventSchema);

module.exports = ServerEvent;

