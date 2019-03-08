class PositionEnum {

    /**
     * Represent the player positions
     */
    static getPositionEnum() {
        return {
            GOALKEEPER: 'GOALKEEPER',
            FIXO: 'FIXO',
            MIDFIELD: 'MIDFIELD',
            PIVOT: 'PIVOT',
            prop: {
                'GOALKEEPER': {name: 'GOALKEEPER'},
                'FIXO': {name: 'FIXO'},
                'MIDFIELD': {name: 'MIDFIELD'},
                'PIVOT': {name: 'PIVOT'}
            }
        };
    }
}

module.exports = PositionEnum;
