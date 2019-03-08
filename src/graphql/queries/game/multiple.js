import {GraphQLEnumType, GraphQLList,} from 'graphql';
import gameType from '../../types/game/game';
import GameSchema from '../../../models/GameSchema';

export default {
    type: new GraphQLList(gameType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'gameOrderBy',
                values: {
                    TYPE: {value: "type"},
                    SUB_TYPE: {value: "sub_type"},
                    PLACE: {value: "place"},
                    HOME: {value: "home"},
                    VISITOR: {value: "visitor"},
                    HOME_GOALS: {value: "home_goals"},
                    VISITOR_GOALS: {value: "visitor_goals"},
                    FAULTS_FIRST_HALF: {value: "faults_first_half"},
                    FAULTS_SECOND_HALF: {value: "faults_second_half"},
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

        return GameSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};