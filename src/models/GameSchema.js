import mongoose from "mongoose";
import GameTypeEnum from "../enums/GameTypeEnum"
import GameSubTypeEnum from "../enums/GameSubTypeEnum"
import GamePlaceEnum from "../enums/GamePlaceEnum"
const SchemaTypes = mongoose.Schema.Types;

// Define the database model
const GameSchema = new mongoose.Schema({
        date: {
            type: Date
        },
        type: {
            type: String,
            default: GameTypeEnum.getGameTypeEnum().TRAINING,
            enum: [
                GameTypeEnum.getGameTypeEnum().TRAINING,
                GameTypeEnum.getGameTypeEnum().FRIENDLY_GAME,
                GameTypeEnum.getGameTypeEnum().LEAGUE,
                GameTypeEnum.getGameTypeEnum().FESTIVAL,
                GameTypeEnum.getGameTypeEnum().CITY_GAMES
            ]
        },
        sub_type: {
            type: String,
            default: GameSubTypeEnum.getGameSubTypeEnum().SECOND_GAME,
            enum: [
                GameSubTypeEnum.getGameSubTypeEnum().SECOND_GAME,
                GameSubTypeEnum.getGameSubTypeEnum().FIRST_GAME
            ]
        },
        place: {
            type: String,
            default: GamePlaceEnum.getGamePlaceEnum().HOME,
            enum: [
                GamePlaceEnum.getGamePlaceEnum().HOME,
                GamePlaceEnum.getGamePlaceEnum().AWAY
            ]
        },
        home: {
            type: SchemaTypes.ObjectId,
            ref: 'Team',
            required: true
        },
        visitor: {
            type: SchemaTypes.ObjectId,
            ref: 'Visitor',
            required: true
        },
        home_goals:{
            type: Number,
            min : 0,
            max : 999
        },
        visitor_goals:{
            type: Number,
            min : 0,
            max : 999
        },
        faults_first_half:{
            type: Number,
            min : 0,
            max : 999
        },
        faults_second_half:{
            type: Number,
            min : 0,
            max : 999
        },
        players_stats: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'PlayerStats'
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

GameSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Game', GameSchema);