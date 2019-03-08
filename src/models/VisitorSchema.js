import mongoose from "mongoose";

// Define the database model
const VisitorSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 200,
            minlength: 0
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

VisitorSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Visitor', VisitorSchema);