import { createClient } from 'redis';


class RedisClient {
  const Redis = require('ioredis');

  constructor() {
    this.client = createClient();
    // Event handler for successful connection
    this.client.on('connect', () => {
      console.log('Redis client connected to the server');
});

    // Event handler for connection errors
    this.client.on('error', (error) => {
      console.error(`Redis client not connected to the server: ${error.message}`);
});
  }

  isAlive() {
    return this.client.connected; 
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }
}
