import {GraphQLNonNull, GraphQLString} from 'graphql';
import userSignInType from '../../types/user/signin-user';
import userTokenType from '../../types/user/user-token';
import UserSchema from '../../../models/UserSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: GraphQLString,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userSignInType)
        }
    },
    async resolve(root, params, context) {

        const user = await UserSchema.findOne({email: params.data.email, deleted_at: {$exists: false}});
        if (!user || !Helpers.compareHash(params.data.password, user.password)) {
            throw new Error('Usuário ou senha inválida!');
        }
        return Helpers.generateToken(user);
    }
};
