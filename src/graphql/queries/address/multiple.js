import {GraphQLEnumType, GraphQLList,} from 'graphql';
import addressType from '../../types/address/address';
import AddressSchema from '../../../models/AddressSchema';

export default {
    type: new GraphQLList(addressType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'addressOrderBy',
                values: {
                    STREET: {value: "street"},
                    CITY: {value: "city"},
                    COUNTRY: {value: "country"}
                }
            })
        }
    },
    resolve(root, params) {
        let orderBy = {};
        if (params.orderBy) {
            orderBy = params.orderBy;
            delete params.orderBy;
        }

        return AddressSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};