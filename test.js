import { Redis } from "@upstash/redis";

async function main() {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
        console.log("No Upstash credentials in process.env");
        return;
    }
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    try {
        const pong = await redis.ping();
        console.log("Redis ping:", pong);

        // Test eval
        const script = `
      local isNew = redis.call('SET', KEYS[1], ARGV[1], 'NX')
      if isNew then
        local count = redis.call('INCR', KEYS[2])
        return {1, count}
      else
        local count = redis.call('GET', KEYS[2])
        return {0, tonumber(count) or 0}
      end
    `;
        const res = await redis.eval(script, ["test:temp_vis", "test:temp_cnt"], [Date.now().toString()]);
        console.log("Lua eval result 1:", res);

        const res2 = await redis.eval(script, ["test:temp_vis", "test:temp_cnt"], [Date.now().toString()]);
        console.log("Lua eval result 2 (should be not new):", res2);

        // Clean up test keys
        await redis.del("test:temp_vis", "test:temp_cnt");
        console.log("Cleaned up test keys successfully");
    } catch (err) {
        console.error("Redis test error:", err.message);
    }
}

main();
