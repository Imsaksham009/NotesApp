const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        },
        // notes: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "Note"

        // }]
    }
);

module.exports = mongoose.model("User", userSchema);
