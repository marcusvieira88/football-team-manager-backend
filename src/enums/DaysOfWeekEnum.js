class DaysOfWeekEnum {

    /**
     * Represent the days of week
     */
    static getDaysOfWeekEnum() {
        return {
            MONDAY: 'MONDAY',
            TUESDAY: 'TUESDAY',
            WEDNESDAY: 'WEDNESDAY',
            THURSDAY: 'THURSDAY',
            FRIDAY: 'FRIDAY',
            SATURDAY: 'SATURDAY',
            SUNDAY: 'SUNDAY',
            prop: {
                'MONDAY': {name: 'MONDAY'},
                'TUESDAY': {name: 'TUESDAY'},
                'WEDNESDAY': {name: 'WEDNESDAY'},
                'THURSDAY': {name: 'THURSDAY'},
                'FRIDAY': {name: 'FRIDAY'},
                'SATURDAY': {name: 'SATURDAY'},
                'SUNDAY': {name: 'SUNDAY'}
            }
        };
    }
}

module.exports = DaysOfWeekEnum;
