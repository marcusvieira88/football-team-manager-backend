class GamePlaceEnum {

    /**
     * Represent the game place
     */
    static getGamePlaceEnum() {
        return {
            HOME: 'HOME',
            AWAY: 'AWAY',
            prop: {
                'HOME': {name: 'HOME'},
                'AWAY': {name: 'AWAY'}
            }
        };
    }
}

module.exports = GamePlaceEnum;
