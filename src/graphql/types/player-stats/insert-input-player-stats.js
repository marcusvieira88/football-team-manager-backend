import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'PlayerStatsInsertInput',
    fields: {
        player_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        goals: {
            type: GraphQLInt
        },
        assists: {
            type: GraphQLInt
        },
        yellow_cards: {
            type: GraphQLInt
        },
        red_cards: {
            type: GraphQLInt
        }
    }
});