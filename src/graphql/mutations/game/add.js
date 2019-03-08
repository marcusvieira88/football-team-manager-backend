import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import gameType from '../../types/game/insert-input-game';
import GameSchema from '../../../models/GameSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(gameType)
        }
    },
    async resolve(root, params, options) {
        const gameModel = new GameSchema(params.data);
        const newGame = await gameModel.save();

        if (!newGame) {
            throw new Error('Error adding new game');
        }
        return true;
    }
};