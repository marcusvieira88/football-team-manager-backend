import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import userType from '../../types/user/update-input-user';
import UserSchema from '../../../models/UserSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userType)
        }
    },
    async resolve(root, params, options) {
        const updatedUser = await UserSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedUser) {
            throw new Error('Error updating new user');
        }
        return true;
    }
};