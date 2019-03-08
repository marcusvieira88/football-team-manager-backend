import {GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserInsertInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        roles: {
            type: new GraphQLList(GraphQLString)
        },
        description: {
            type: GraphQLString
        }
    }
});