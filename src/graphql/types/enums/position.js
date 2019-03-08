import {GraphQLEnumType} from "graphql";

/**
 * Represent the player positions graphql
 */
export default new GraphQLEnumType({
    name: 'PositionEnum',
    values: {
        GOALKEEPER: {
            value: 'GOALKEEPER',
        },
        FIXO: {
            value: 'FIXO',
        },
        MIDFIELD: {
            value: 'MIDFIELD',
        },
        FESTIVAL: {
            value: 'FESTIVAL',
        },
        PIVOT: {
            value: 'PIVOT',
        }
    },
});