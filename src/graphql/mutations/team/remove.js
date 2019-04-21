import {GraphQLID, GraphQLNonNull} from 'graphql';
import teamType from '../../types/team/team';
import TeamSchema from '../../../models/TeamSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: teamType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedTeam = await TeamSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedTeam) {
            throw new Error('Error removing team');
        }

        return removedTeam;
    }
};
