import {GraphQLEnumType} from "graphql";

/**
 * Represent the game type graphql
 */
export default new GraphQLEnumType({
    name: 'GameTypeEnum',
    values: {
        TRAINING: {
            value: 'TRAINING',
        },
        FRIENDLY_GAME: {
            value: 'FRIENDLY_GAME',
        },
        LEAGUE: {
            value: 'LEAGUE',
        },
        FESTIVAL: {
            value: 'FESTIVAL',
        },
        CITY_GAMES: {
            value: 'CITY_GAMES',
        }
    },
});