import mongoose from "mongoose";
const SchemaTypes = mongoose.Schema.Types;

// Define the database model
const PlayerStatSchema = new mongoose.Schema({
        player_id: {
            type: SchemaTypes.ObjectId,
            ref: 'Player',
            required: true
        },
        goals:{
            type: Number,
            min : 0,
            max : 999
        },
        assists:{
            type: Number,
            min : 0,
            max : 999
        },
        yellow_cards:{
            type: Number,
            min : 0,
            max : 999
        },
        red_cards:{
            type: Number,
            min : 0,
            max : 999
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

PlayerStatSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('PlayerStats', PlayerStatSchema);