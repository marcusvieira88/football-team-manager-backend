import {GraphQLEnumType, GraphQLList,} from 'graphql';
import playersType from '../../types/player/player';
import PlayerSchema from '../../../models/PlayerSchema';

export default {
    type: new GraphQLList(playersType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'playerOrderBy',
                values: {
                    NAME: {value: "name"},
                    POSITION: {value: "position"},
                    NUMBER: {value: "number"}
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

        return PlayerSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};