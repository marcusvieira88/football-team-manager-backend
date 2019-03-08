import {GraphQLID, GraphQLNonNull} from 'graphql';
import playerType from '../../types/player/player';
import PlayerSchema from '../../../models/PlayerSchema';

export default {
    type: playerType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const removedPlayer = await PlayerSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedPlayer) {
            throw new Error('Error removing player');
        }

        return removedPlayer;
    }
};