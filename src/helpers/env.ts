function getEnv(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  MONGO_URI: getEnv("MONGO_URI"),
  TOKEN_SECRET: getEnv("TOKEN_SECRET"),
  DOMAIN: getEnv("DOMAIN"),
  MAILTRAP_USER_ID: getEnv("MAILTRAP_USER_ID"),
  MAILTRAP_PASSWORD: getEnv("MAILTRAP_PASSWORD"),
  MAILTRAP_PORT: getEnv("MAILTRAP_PORT"),
  MAILTRAP_HOST: getEnv('MAILTRAP_HOST')
};
