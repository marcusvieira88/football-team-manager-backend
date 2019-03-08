import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'VisitorInsertInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});