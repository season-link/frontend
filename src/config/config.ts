import zod from 'zod';

type Env = {
  apiBaseUrl: string;
};

const configSchema = zod.object({
  apiBaseUrl: zod.string().url(),
});

const client: Env = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL as string,
};

console.log(client);

configSchema.parse(client);

export default client;
