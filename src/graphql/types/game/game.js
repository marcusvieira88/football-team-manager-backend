import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {GraphQLDate} from "graphql-iso-date/dist/index";
import gameEnumType from "../enums/game-type";
import gameSubEnumType from "../enums/game-sub-type";

export default new GraphQLObjectType({
    name: 'Game',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
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