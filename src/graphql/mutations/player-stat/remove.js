import {GraphQLID, GraphQLNonNull} from 'graphql';
import playerStatType from '../../types/player-stats/player-stats';
import PlayerStatSchema from '../../../models/PlayerStatSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: playerStatType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedPlayerStat = await PlayerStatSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedPlayerStat) {
            throw new Error('Error removing playerStat');
        }

        return removedPlayerStat;
    }
};
