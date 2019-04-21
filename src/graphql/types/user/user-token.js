import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserToken',
    fields: {
        token: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});