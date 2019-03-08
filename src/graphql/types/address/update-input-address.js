import {GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'AddressUpdateInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        street: {
            type: new GraphQLNonNull(GraphQLString)
        },
        number: {
            type: GraphQLString
        },
        complement: {
            type: GraphQLString
        },
        postal_code: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        }
    }
});