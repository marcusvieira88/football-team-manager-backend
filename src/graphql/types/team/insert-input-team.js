import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';
import {GraphQLDate} from "graphql-iso-date";

export default new GraphQLInputObjectType({
    name: 'TeamInsertInput',
    fields: {
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