import {GraphQLID, GraphQLNonNull} from 'graphql';
import periodType from '../../types/period/period';
import PeriodSchema from '../../../models/PeriodSchema';

export default {
    type: periodType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedPeriod = await PeriodSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedPeriod) {
            throw new Error('Error removing period');
        }

        return removedPeriod;
    }
};
