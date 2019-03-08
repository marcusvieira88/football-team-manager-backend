import mongoose from "mongoose";

// Define the database model
const AddressSchema = new mongoose.Schema({
        street: {
            type: String,
            maxlength: 200,
            minlength: 0
        },
        number: {
            type: String,
            maxlength: 40,
            minlength: 0
        },
        complement: {
            type: String,
            maxlength: 100,
            minlength: 0
        },
        postal_code: {
            type: String,
            maxlength: 10,
            minlength: 0
        },
        city: {
            type: String,
            maxlength: 100,
            minlength: 0
        },
        country: {
            type: String,
            maxlength: 100,
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

AddressSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Address', AddressSchema);