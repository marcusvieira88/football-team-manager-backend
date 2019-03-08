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
        'local': {config: 'mongodb://mongo:27017/football-team-manager'},
        'development': {config: process.env.MONGODB_URI},
        'staging': {config: process.env.MONGODB_URI},
        'production': {config: process.env.MONGODB_URI}
      }
    };
  }
}

module.exports = Config;

