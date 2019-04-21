import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import playerStatType from '../../types/player-stats/insert-input-player-stats';
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

        const playerStatModel = new PlayerStatSchema(params.data);
        const newPlayerStat = await playerStatModel.save();

        if (!newPlayerStat) {
            throw new Error('Error adding new playerStat');
        }
        return true;
    }
};
