// Import necessary modules and functions
import { expect } from 'chai';
import redisClient from '../utils/redis';

// Test connection to Redis
describe('Redis Client', () => {
  it('should have a live connection to Redis', () => {
    expect(redisClient.isAlive()).to.be.true;
  });

  // Test Redis operations
  it('should set and get value from Redis', async () => {
    const key = 'testKey';
    const value = 'testValue';

    await redisClient.set(key, value, 10);
    const retrievedValue = await redisClient.get(key);

    expect(retrievedValue).to.equal(value);
  });

  // Add more tests as needed
});
