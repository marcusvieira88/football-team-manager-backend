import {GraphQLID, GraphQLNonNull} from 'graphql';
import addressType from '../../types/address/address';
import AddressSchema from '../../../models/AddressSchema';

export default {
    type: addressType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {

        return AddressSchema
            .findById(params.id)
            .exec();
    }
};