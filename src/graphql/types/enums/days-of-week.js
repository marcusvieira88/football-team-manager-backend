import {GraphQLEnumType} from "graphql";

/**
 * Represent the days of week graphql
 */
export default new GraphQLEnumType({
    name: 'DaysOfWeekEnum',
    values: {
        MONDAY: {
            value: 'MONDAY',
        },
        TUESDAY: {
            value: 'TUESDAY',
        },
        WEDNESDAY: {
            value: 'WEDNESDAY',
        },
        THURSDAY: {
            value: 'THURSDAY',
        },
        FRIDAY: {
            value: 'FRIDAY',
        },
        SATURDAY: {
            value: 'SATURDAY',
        },
        SUNDAY: {
            value: 'SUNDAY',
        },
    },
});