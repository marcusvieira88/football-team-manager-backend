import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import addressType from '../../types/address/update-input-address';
import AddressSchema from '../../../models/AddressSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(addressType)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const updatedAddress = await AddressSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedAddress) {
            throw new Error('Error updating new address');
        }
        return true;
    }
};
