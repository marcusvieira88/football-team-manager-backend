import {GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {GraphQLDate} from "graphql-iso-date";
import gameEnumType from "../enums/game-type";
import gameSubEnumType from "../enums/game-sub-type";

export default new GraphQLInputObjectType({
    name: 'GameUpdateInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        date: {
            type: GraphQLDate
        },
        type: {
            type: gameEnumType
        },
        sub_type: {
            type: gameSubEnumType
        },
        home: {
            type: GraphQLString
        },
        visitor: {
            type: GraphQLString
        },
        home_goals: {
            type: GraphQLInt
        },
        visitor_goals: {
            type: GraphQLInt
        },
        faults_first_half: {
            type: GraphQLInt
        },
        faults_second_half: {
            type: GraphQLInt
        },
        players_stats: {
            type: new GraphQLList(GraphQLString)
        }
    }
});