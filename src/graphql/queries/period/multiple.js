import {GraphQLEnumType, GraphQLList,} from 'graphql';
import periodType from '../../types/period/period';
import PeriodSchema from '../../../models/PeriodSchema';

export default {
    type: new GraphQLList(periodType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'periodOrderBy',
                values: {
                    PLACE_NAME: {value: "place_name"},
                    DAY_OF_WEEK: {value: "day_of_week"}
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

        return PeriodSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};