import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'PlayerStats',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
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