import {GraphQLID, GraphQLNonNull} from 'graphql';
import periodType from '../../types/period/period';
import PeriodSchema from '../../../models/PeriodSchema';

export default {
    type: periodType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {

        return PeriodSchema
            .findById(params.id)
            .exec();
    }
};