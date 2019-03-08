import {GraphQLEnumType} from "graphql";

/**
 * Represent the game place graphql
 */
export default new GraphQLEnumType({
    name: 'GamePlaceEnum',
    values: {
        HOME: {
            value: 'HOME',
        },
        AWAY: {
            value: 'AWAY',
        }
    },
});