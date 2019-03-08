import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import periodType from '../../types/period/insert-input-period';
import PeriodSchema from '../../../models/PeriodSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(periodType)
        }
    },
    async resolve(root, params, options) {
        const userModel = new PeriodSchema(params.data);
        const newUser = await userModel.save();

        if (!newUser) {
            throw new Error('Error adding new user');
        }
        return true;
    }
};