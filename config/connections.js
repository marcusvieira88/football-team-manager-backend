class Config {
  /**
   * Represent the database configuration
   */
  static getDatabaseConfig() {
    return {
      LOCAL: 'local',
      DEVELOPMENT: 'development',
      STAGING: 'staging',
      PRODUCTION: 'production',
      environment: {
        'development': {config: 'mongodb://football-team-manager:HaYocZQFIcVXKXpW@football-team-manager-shard-00-00-h98dx.mongodb.net:27017,football-team-manager-shard-00-01-h98dx.mongodb.net:27017,football-team-manager-shard-00-02-h98dx.mongodb.net:27017/test?ssl=true&replicaSet=football-team-manager-shard-0&authSource=admin&retryWrites=true'},
        'staging': {config: 'mongodb://football-team-manager:HaYocZQFIcVXKXpW@football-team-manager-shard-00-00-h98dx.mongodb.net:27017,football-team-manager-shard-00-01-h98dx.mongodb.net:27017,football-team-manager-shard-00-02-h98dx.mongodb.net:27017/test?ssl=true&replicaSet=football-team-manager-shard-0&authSource=admin&retryWrites=true'},
        'production': {config: 'mongodb://football-team-manager:HaYocZQFIcVXKXpW@football-team-manager-shard-00-00-h98dx.mongodb.net:27017,football-team-manager-shard-00-01-h98dx.mongodb.net:27017,football-team-manager-shard-00-02-h98dx.mongodb.net:27017/test?ssl=true&replicaSet=football-team-manager-shard-0&authSource=admin&retryWrites=true'}
      }
    };
  }
}

module.exports = Config;

