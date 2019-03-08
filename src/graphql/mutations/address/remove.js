import {GraphQLID, GraphQLNonNull} from 'graphql';
import addressType from '../../types/address/address';
import AddressSchema from '../../../models/AddressSchema';

export default {
    type: addressType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const removedAddress = await AddressSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedAddress) {
            throw new Error('Error removing address');
        }

        return removedAddress;
    }
};