import {GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserUpdateInput',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        roles: {
            type: new GraphQLList(GraphQLString)
        },
        description: {
            type: GraphQLString
        }
    }
});