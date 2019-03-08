import {GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {GraphQLDate} from "graphql-iso-date";
import gameEnumType from "../enums/game-type";
import gameSubEnumType from "../enums/game-sub-type";

export default new GraphQLInputObjectType({
    name: 'GameInsertInput',
    fields: {
        date: {
            type: new GraphQLNonNull(GraphQLDate)
        },
        type: {
            type: new GraphQLNonNull(gameEnumType)
        },
        sub_type: {
            type: gameSubEnumType
        },
        home: {
            type: new GraphQLNonNull(GraphQLString)
        },
        visitor: {
            type: new GraphQLNonNull(GraphQLString)
        },
        home_goals: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        visitor_goals: {
            type: new GraphQLNonNull(GraphQLInt)
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