import {GraphQLEnumType, GraphQLList,} from 'graphql';
import teamType from '../../types/team/team';
import TeamSchema from '../../../models/TeamSchema';

export default {
    type: new GraphQLList(teamType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'teamOrderBy',
                values: {
                    NAME: {value: "name"},
                    FOUNDED_DATE: {value: "founded_date"}
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

        return TeamSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};