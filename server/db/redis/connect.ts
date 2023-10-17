import { RedisClientType, createClient } from "redis";

// set up redis database
const createRedisClient = async () => {
  const client = await createClient()
    .on("error", (err) => console.log("Redis client error", err))
    .connect();
  return client;
};

const closeRedisClient = async (client: RedisClientType) => {
  await client.disconnect();
};

export { createRedisClient, closeRedisClient };
