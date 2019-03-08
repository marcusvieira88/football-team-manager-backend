import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import daysOfWeekEnumType from '../enums/days-of-week';

export default new GraphQLObjectType({
    name: 'Period',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        place_name: {
            type: GraphQLString
        },
        start_period: {
            type: GraphQLString
        },
        end_period: {
            type: GraphQLString
        },
        day_of_week: {
            type: daysOfWeekEnumType
        },
        address: {
            type: GraphQLString
        }
    }
});