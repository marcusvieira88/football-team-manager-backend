import {GraphQLID, GraphQLNonNull} from 'graphql';
import playerStatType from '../../types/player-stats/player-stats';
import PlayerStatSchema from '../../../models/PlayerStatSchema';

export default {
    type: playerStatType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const removedPlayerStat = await PlayerStatSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedPlayerStat) {
            throw new Error('Error removing playerStat');
        }

        return removedPlayerStat;
    }
};