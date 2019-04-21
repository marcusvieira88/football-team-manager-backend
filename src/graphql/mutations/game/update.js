import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import gameType from '../../types/game/update-input-game';
import GameSchema from '../../../models/GameSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(gameType)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const updatedUser = await GameSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedUser) {
            throw new Error('Error updating new game');
        }
        return true;
    }
};
