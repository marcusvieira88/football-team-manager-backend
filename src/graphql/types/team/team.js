import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

import {GraphQLDate} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'Team',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        founded_date: {
            type: GraphQLDate
        },
        logo: {
            type: GraphQLString
        },
        chairmanId: {
            type: GraphQLString
        },
        period_id: {
            type: GraphQLString
        }
    }
});