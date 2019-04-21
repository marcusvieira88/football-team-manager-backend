import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import addressType from '../../types/address/insert-input-address';
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

        const addressModel = new AddressSchema(params.data);
        const newAddress = await addressModel.save();

        if (!newAddress) {
            throw new Error('Error adding new address');
        }
        return true;
    }
};
