# Express TypeScript Prisma Template

A modern, scalable Express.js API template built with TypeScript and Prisma ORM. This template provides a solid foundation for building RESTful APIs with database integration, authentication middleware, and a clean modular architecture.

## 🚀 Features

- **TypeScript**: Full TypeScript support for type safety and better developer experience
- **Prisma ORM**: Modern database toolkit with type-safe database access
- **PostgreSQL**: Robust relational database support
- **Express.js**: Fast, unopinionated web framework
- **Modular Architecture**: Clean separation of concerns with modules, controllers, services, and repositories
- **Authentication Middleware**: Basic auth and JWT support ready for implementation
- **Logging**: Pino logger with pretty printing for development
- **Environment Configuration**: Flexible configuration management
- **Database Migrations**: Automated schema migrations with Prisma
- **Hot Reload**: Development server with automatic restart on file changes

## 🛠 Tech Stack

- **Runtime**: Node.js with ES modules
- **Language**: TypeScript
- **Framework**: Express.js v5
- **Database**: PostgreSQL
- **ORM**: Prisma v6
- **Logger**: Pino
- **Development**: tsx (TypeScript execution and REPL)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Git**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd express-ts-prisma-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure your environment variables:

   ```env
   PORT=3000
   BASIC_AUTH_USERNAME=admin
   BASIC_AUTH_PASSWORD=admin
   JWT_SECRET=your_jwt_secret_key
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
   ```

4. **Set up the database**

   Make sure PostgreSQL is running and create a database for the project.

5. **Run database migrations**

   ```bash
   npm run migrate
   ```

6. **Generate Prisma client**
   ```bash
   npm run generate
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

This starts the development server with hot reload on `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
express-ts-prisma-template/
├── prisma/
│   ├── schema.prisma          # Database schema definition
│   └── migrations/            # Database migration files
├── src/
│   ├── config/                # Configuration files
│   │   └── index.ts
│   ├── lib/                   # Core libraries
│   │   └── prisma/
│   ├── middlewares/           # Express middlewares
│   │   └── auth.ts
│   ├── modules/               # Feature modules
│   │   └── users/             # User management module
│   │       ├── user.route.ts
│   │       ├── users.controller.ts
│   │       ├── users.service.ts
│   │       └── users.repository.ts
│   ├── types/                 # TypeScript type definitions
│   │   └── config.d.ts
│   ├── utils/                 # Utility functions
│   │   └── logger.ts
│   ├── app.ts                 # Express application setup
│   └── server.ts              # Server entry point
├── .env.example               # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄 Database Schema

The application includes two main models:

### User

- `id`: Auto-incrementing primary key
- `email`: Unique email address
- `name`: Optional user name
- `posts`: One-to-many relationship with Post model

### Post

- `id`: Auto-incrementing primary key
- `title`: Post title
- `content`: Optional post content
- `published`: Publication status (default: false)
- `authorId`: Foreign key to User
- `author`: Many-to-one relationship with User

## 🔗 API Endpoints

Currently, the application has a basic "Hello World" endpoint:

- `GET /` - Returns "Hello World!"

The modular structure is set up for implementing RESTful endpoints for users and posts. The user module includes:

- Controller layer for handling HTTP requests
- Service layer for business logic
- Repository layer for data access
- Route definitions

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run migrate` - Run database migrations
- `npm run generate` - Generate Prisma client

## 🔒 Environment Variables

| Variable              | Description                  | Default  |
| --------------------- | ---------------------------- | -------- |
| `PORT`                | Server port                  | 3000     |
| `DATABASE_URL`        | PostgreSQL connection string | Required |
| `BASIC_AUTH_USERNAME` | Basic auth username          | admin    |
| `BASIC_AUTH_PASSWORD` | Basic auth password          | admin    |
| `JWT_SECRET`          | JWT signing secret           | Required |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running
- Verify `DATABASE_URL` in your `.env` file
- Check database credentials and permissions

### Port Already in Use

- Change the `PORT` in your `.env` file
- Or kill the process using the port: `lsof -ti:3000 | xargs kill -9`

### TypeScript Compilation Errors

- Run `npm run build` to check for compilation issues
- Ensure all dependencies are installed: `npm install`

## 📞 Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.
