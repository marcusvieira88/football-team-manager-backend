import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'ResetUserPassword',
    fields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});