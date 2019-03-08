import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import teamType from '../../types/user/update-input-user';
import TeamSchema from '../../../models/TeamSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(teamType)
        }
    },
    async resolve(root, params, options) {
        const updatedTeam = await TeamSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedTeam) {
            throw new Error('Error updating new team');
        }
        return true;
    }
};