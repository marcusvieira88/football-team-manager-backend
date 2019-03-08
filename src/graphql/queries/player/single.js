import {GraphQLID, GraphQLNonNull} from 'graphql';
import playersType from '../../types/player/player';
import PlayerSchema from '../../../models/PlayerSchema';

export default {
    type: playersType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {

        return PlayerSchema
            .findById(params.id)
            .exec();
    }
};