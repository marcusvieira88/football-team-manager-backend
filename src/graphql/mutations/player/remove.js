import {GraphQLID, GraphQLNonNull} from 'graphql';
import playerType from '../../types/player/player';
import PlayerSchema from '../../../models/PlayerSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: playerType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedPlayer = await PlayerSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedPlayer) {
            throw new Error('Error removing player');
        }

        return removedPlayer;
    }
};
