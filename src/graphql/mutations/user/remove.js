import {GraphQLID, GraphQLNonNull} from 'graphql';
import userType from '../../types/user/user';
import UserSchema from '../../../models/UserSchema';

export default {
    type: userType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const removedUser = await UserSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedUser) {
            throw new Error('Error removing user');
        }

        return removedUser;
    }
};