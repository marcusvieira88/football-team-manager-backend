import mongoose from "mongoose";
const SchemaTypes = mongoose.Schema.Types;

// Define the database model
const TeamSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 200,
            minlength: 0
        },
        founded_date: {
            type: Date
        },
        logo: {
            data: Buffer, contentType: String
        },
        chairmanId: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        period_id: {
            type: SchemaTypes.ObjectId,
            ref: 'Period',
            required: true
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

TeamSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Team', TeamSchema);