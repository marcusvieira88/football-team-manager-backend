import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import userSignUpType from '../../types/user/signup-user';
import UserSchema from '../../../models/UserSchema';
import logger from '../../../utils/Logger';
import Email from '../../../utils/Email';
import Helpers from '../../../utils/Helpers';
import crypto from 'crypto';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userSignUpType)
        }
    },
    async resolve(root, params, context) {
        const user = await UserSchema.findOne({email: params.data.email, deleted_at: {$exists: false}});
        if (user) {
            throw new Error('E-mail já cadastrado!');
        }

        const userModel = new UserSchema(params.data);
        userModel.password = Helpers.generateHash(userModel.password);
        userModel.hash = crypto.randomBytes(40).toString('hex');
        const newUser = await userModel.save();
        if (!newUser) {
            throw new Error(`Error adding new user ${params.email}`);
        }

        //Send confirmation email
        Email.sendConfirmation(newUser.email, userModel.hash);
        return true;
    }
};
