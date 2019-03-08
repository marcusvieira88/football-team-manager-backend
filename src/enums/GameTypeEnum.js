class GameTypeEnum {

    /**
     * Represent the game type
     */
    static getGameTypeEnum() {
        return {
            TRAINING: 'TRAINING',
            FRIENDLY_GAME: 'FRIENDLY_GAME',
            LEAGUE: 'LEAGUE',
            FESTIVAL: 'FESTIVAL',
            CITY_GAMES: 'CITY_GAMES',
            prop: {
                'TRAINING': {name: 'TRAINING'},
                'FRIENDLY_GAME': {name: 'FRIENDLY_GAME'},
                'LEAGUE': {name: 'LEAGUE'},
                'FESTIVAL': {name: 'FESTIVAL'},
                'CITY_GAMES': {name: 'CITY_GAMES'}
            }
        };
    }
}

module.exports = GameTypeEnum;
