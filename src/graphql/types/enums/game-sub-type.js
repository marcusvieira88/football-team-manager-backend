import {GraphQLEnumType} from "graphql";

/**
 * Represent the game sub type graphql
 */
export default new GraphQLEnumType({
    name: 'GameSubTypeEnum',
    values: {
        FIRST_GAME: {
            value: 'FIRST_GAME',
        },
        SECOND_GAME: {
            value: 'SECOND_GAME',
        }
    },
});