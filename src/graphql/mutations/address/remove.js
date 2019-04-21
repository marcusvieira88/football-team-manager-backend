import {GraphQLID, GraphQLNonNull} from 'graphql';
import addressType from '../../types/address/address';
import AddressSchema from '../../../models/AddressSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: addressType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedAddress = await AddressSchema
            .findOneAndUpdate({_id: params._id, deleted_at:{$exists: false}},
                {$set:{deleted_at:new Date()}},{new: 'true'});

        if (!removedAddress) {
            throw new Error('Error removing address');
        }

        return removedAddress;
    }
};
