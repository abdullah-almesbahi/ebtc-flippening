# Flippening Trading UI

Describe what this project is about. Mention its primary purpose, the problem it solves, or the need it addresses.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Roadmap](#roadmap)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## Features

**Frontend Components**:
- Wallet Connection
- Invite Code Entry
- Twitter Linking
- User Dashboard
- Leaderboard Display
- Portfolio Management
- Rewards & Invites

**Backend Components**:
- Authentication Middleware
- Database Management
- Trading Logic
- Rewards System
- Leaderboard Logic
- Notifications System
- Integration Handlers
- API Endpoints

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Prisma (MySQL) with GraphQL
- **Authentication**: WalletConnect
- **Other Integrations**: Twitter API, Zaps, TradingView


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Getting Started

1. **Prerequisites**:
   - Ensure you have Node.js and pnpm installed.
   - MySQL server must be up and running.
   
2. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   ```

3. **Install Dependencies**:
   ```bash
   cd [project-folder]
   pnpm install
   ```

4. **Setting Up Environment Variables**:
   - Rename `.env.example` to `.env`
   - Fill out the necessary environment variables.

5. **Running the Application**:
   - Development mode: 
     ```bash
     pnpm run dev
     ```
   - Production build:
     ```bash
     pnpm run build
     pnpm start
     ```

## Roadmap

- TODO

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
