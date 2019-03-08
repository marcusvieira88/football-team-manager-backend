import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import positionEnumType from '../enums/position';

export default new GraphQLObjectType({
    name: 'Player',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        user_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        position: {
            type: positionEnumType
        },
        number: {
            type: GraphQLInt
        },
        photo: {
            type: GraphQLString
        },
        teams: {
            type: new GraphQLList(GraphQLString)
        }
    }
});