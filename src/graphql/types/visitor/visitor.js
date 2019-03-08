import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'Visitor',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        }
    }
});