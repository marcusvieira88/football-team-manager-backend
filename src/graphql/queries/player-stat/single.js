import {GraphQLID, GraphQLNonNull} from 'graphql';
import playerStatsType from '../../types/player-stats/player-stats';
import PlayerStatsSchema from '../../../models/PlayerStatSchema';

export default {
    type: playerStatsType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {

        return PlayerStatsSchema
            .findById(params.id)
            .exec();
    }
};