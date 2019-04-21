import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import userResetPassword from '../../types/user/reset-user-password';
import UserSchema from '../../../models/UserSchema';
import Helpers from '../../../utils/Helpers';
import Email from "../../../utils/Email";

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userResetPassword)
        }
    },
    async resolve(root, params, options) {

        const user = await UserSchema.findOne({email: params.data.email, deleted_at: {$exists: false}});
        if (!user || !Helpers.compareHash(params.password, user.password)) {
            throw new Error('Usuário não encontrado!');
        }
        //Send confirmation email
        Email.sendResetPassword(user.email);
    }
};
