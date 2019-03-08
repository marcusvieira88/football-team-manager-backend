import {GraphQLID, GraphQLNonNull} from 'graphql';
import teamType from '../../types/team/team';
import TeamSchema from '../../../models/TeamSchema';

export default {
    type: teamType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const removedTeam = await TeamSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedTeam) {
            throw new Error('Error removing team');
        }

        return removedTeam;
    }
};