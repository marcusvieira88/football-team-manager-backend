import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import gameType from '../../types/game/insert-input-game';
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

        const gameModel = new GameSchema(params.data);
        const newGame = await gameModel.save();

        if (!newGame) {
            throw new Error('Error adding new game');
        }
        return true;
    }
};
