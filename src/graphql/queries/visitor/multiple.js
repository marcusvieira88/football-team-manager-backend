import {GraphQLEnumType, GraphQLList,} from 'graphql';
import visitorType from '../../types/visitor/visitor';
import VisitorSchema from '../../../models/VisitorSchema';

export default {
    type: new GraphQLList(visitorType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'visitorOrderBy',
                values: {
                    NAME: {value: "name"}
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

        return VisitorSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};