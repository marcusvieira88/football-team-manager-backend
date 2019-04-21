import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import userInsertInputType from '../../types/user/insert-input-user';
import UserSchema from '../../../models/UserSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInsertInputType)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const userModel = new UserSchema(params.data);
        const newUser = await userModel.save();

        if (!newUser) {
            throw new Error('Error adding new user');
        }
        return true;
    }
};
