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
        const removedPeriod = await PeriodSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedPeriod) {
            throw new Error('Error removing period');
        }

        return removedPeriod;
    }
};