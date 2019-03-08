import {GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import positionEnumType from '../enums/position';

export default new GraphQLInputObjectType({
    name: 'PlayerInsertInput',
    fields: {
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
        },
    }
});