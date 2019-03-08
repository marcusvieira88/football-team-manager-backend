import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import userType from '../../types/user/user';
import UserSchema from '../../../models/UserSchema';

export default {
    type: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, ctx, options) {

        return UserSchema
            .findById(params.id)
            .exec();
    }
};