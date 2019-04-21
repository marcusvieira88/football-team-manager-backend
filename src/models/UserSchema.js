import mongoose from "mongoose";

// Define the database model
const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 200,
            minlength: 0
        },
        password:{
            type: String,
            maxlength: 100,
            minlength: 0,
            required: true
        },
        email: {
            type: String,
            maxlength: 100,
            minlength: 0
        },
        hash: {
            type: String,
            maxlength: 100,
            minlength: 0
        },
        email_confirmed_at: {
            type: Date
        },
        roles: [{
                type: String,
                maxlength: 200,
                minlength: 0
        }],
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

UserSchema.index({_id: 1, deleted_at: 1});
UserSchema.index({email: 1, deleted_at: 1});

module.exports = mongoose.model('User', UserSchema);
