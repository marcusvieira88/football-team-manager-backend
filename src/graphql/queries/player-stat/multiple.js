import {GraphQLEnumType, GraphQLList,} from 'graphql';
import playerStatsType from '../../types/player-stats/player-stats';
import PlayerStatsSchema from '../../../models/PlayerStatSchema';

export default {
    type: new GraphQLList(playerStatsType),
    args: {
        orderBy: {
            type: new GraphQLEnumType({
                name: 'playerStatOrderBy',
                values: {
                    GOALS: {value: "goals"},
                    ASSISTS: {value: "assists"},
                    YELLOW_CARDS: {value: "yellow_cards"},
                    RED_CARDS: {value: "red_cards"}
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

        return PlayerStatsSchema
            .find(params)
            .sort(orderBy)
            .exec();
    }
};