import {GraphQLID, GraphQLNonNull} from 'graphql';
import userType from '../../types/user/user';
import UserSchema from '../../../models/UserSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: userType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
      Helpers.checkUserUnauthorized(context);

        const removedUser = await UserSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedUser) {
            throw new Error('Error removing user');
        }
        return removedUser;
    }
};
