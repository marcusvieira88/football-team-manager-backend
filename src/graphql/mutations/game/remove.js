import {GraphQLID, GraphQLNonNull} from 'graphql';
import gameType from '../../types/game/game';
import GameSchema from '../../../models/GameSchema';

export default {
    type: gameType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params, options) {
        const removedGame = await GameSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedGame) {
            throw new Error('Error removing game');
        }

        return removedGame;
    }
};