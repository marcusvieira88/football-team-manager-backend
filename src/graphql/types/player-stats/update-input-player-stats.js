import {GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'PlayerStatsUpdateInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        player_id: {
            type: GraphQLString
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