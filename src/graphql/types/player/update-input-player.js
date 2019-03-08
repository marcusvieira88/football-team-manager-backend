import {GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import positionEnumType from '../enums/position';

export default new GraphQLInputObjectType({
    name: 'PlayerUpdateInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        user_id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
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