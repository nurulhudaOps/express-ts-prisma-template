import "dotenv/config";

const config: Config = {
  port: process.env.PORT || "3000",
  basicAuthUsername: process.env.BASIC_AUTH_USERNAME || "admin",
  basicAuthPassword: process.env.BASIC_AUTH_PASSWORD || "admin",
  jwtSecret: process.env.JWT_SECRET || "secret",
}

export default config;