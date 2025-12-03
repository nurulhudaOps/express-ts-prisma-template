import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import logger from "../../../utils/logger.js";

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function initDatabase() {
  try {
    logger.info("Checking DB connection...")
    await prisma.$queryRaw`SELECT NOW() AS "time"`
    logger.info("DB connected!")

    // logger.info("Running migrations...")
    // execSync("npm run migrate", { stdio: "inherit" })
    // logger.info("Migrations completed!")
  } catch (err) {
    logger.error(err, "Database initialization failed")
    process.exit(1)
  }
}

export { prisma, initDatabase }