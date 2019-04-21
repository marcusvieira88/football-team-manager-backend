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
        Helpers.checkUserUnauthorized(context);

        const removedGame = await GameSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedGame) {
            throw new Error('Error removing game');
        }

        return removedGame;
    }
};
