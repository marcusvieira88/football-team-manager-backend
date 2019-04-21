import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import playerStatType from '../../types/player-stats/update-input-player-stats';
import PlayerStatSchema from '../../../models/PlayerStatSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(playerStatType)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const updatedPlayerStat = await PlayerStatSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedPlayerStat) {
            throw new Error('Error updating new playerStat');
        }
        return true;
    }
};
