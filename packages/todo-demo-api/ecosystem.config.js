module.exports = {
    apps : [{
      name: 'todo-demo-api',
      script: 'server.js',
      watch: false,
      env_development: {
        'NODE_ENV': 'development',
      },
      env_release: {
        'NODE_ENV': 'release',
      },
      env_prod: {
        'NODE_ENV': 'prod',
      },
    }]
  };