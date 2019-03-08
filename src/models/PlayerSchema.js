import mongoose from "mongoose";
import PositionEnum from "../enums/PositionEnum"
const SchemaTypes = mongoose.Schema.Types;

// Define the database model
const PlayerSchema = new mongoose.Schema({
        user_id: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            maxlength: 300,
            minlength: 0
        },
        position: {
            type: String,
            default: PositionEnum.getPositionEnum().GOALKEEPER,
            enum: [
                PositionEnum.getPositionEnum().GOALKEEPER,
                PositionEnum.getPositionEnum().FIXO,
                PositionEnum.getPositionEnum().MIDFIELD,
                PositionEnum.getPositionEnum().PIVOT
            ]
        },
        number:{
            type: Number,
            min : 0,
            max : 999
        },
        photo: {
            data: Buffer, contentType: String
        },
        teams: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'Team'
            }
        ],
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

PlayerSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Player', PlayerSchema);