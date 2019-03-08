class GameSubTypeEnum {

    /**
     * Represent the game sub type
     */
    static getGameSubTypeEnum() {
        return {
            FIRST_GAME: 'FIRST_GAME',
            SECOND_GAME: 'SECOND_GAME',
            prop: {
                'FIRST_GAME': {name: 'FIRST_GAME'},
                'SECOND_GAME': {name: 'SECOND_GAME'}
            }
        };
    }
}

module.exports = GameSubTypeEnum;
