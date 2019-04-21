import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import playerType from '../../types/player/insert-input-player';
import PlayerSchema from '../../../models/PlayerSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(playerType)
        }
    },
    async resolve (root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const playerModel = new PlayerSchema(params.data);
        const newPlayer = await playerModel.save();

        if (!newPlayer) {
            throw new Error('Error adding new player');
        }
        return true;
    }
};
