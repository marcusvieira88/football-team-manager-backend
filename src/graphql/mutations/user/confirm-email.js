import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import confirmUserEmail from '../../types/user/confirm-user-email';
import UserSchema from '../../../models/UserSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(confirmUserEmail)
        }
    },
    async resolve(root, params, context) {

        const user = await UserSchema.findOne({hash: params.data.hash, deleted_at: {$exists: false}});
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }
        console.log("TEST EMAIL");
        console.log(user);
        await UserSchema
            .findOneAndUpdate({_id: user._id, deleted_at:{$exists: false}},
                {$set:{email_confirmed_at:new Date()}},{new: 'true'});
        return true;
    }
};
