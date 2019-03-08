import {
    GraphQLList,
    GraphQLEnumType,
} from 'graphql';

import userType from '../../types/user/user';
import UserSchema from '../../../models/UserSchema';

export default {
    type: new GraphQLList(userType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'userOrderBy',
                values: {
                    NAME: { value: "name" },
                    EMAIL: { value: "email" }
                }
            })
        }
    },
    resolve (root, params) {
        let orderBy = {};
        if (params.orderBy) {
            orderBy = params.orderBy;
            delete params.orderBy;
        }

        return UserSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};