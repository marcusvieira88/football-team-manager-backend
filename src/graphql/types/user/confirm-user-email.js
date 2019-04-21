import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'ConfirmUserEmail',
    fields: {
        hash: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});