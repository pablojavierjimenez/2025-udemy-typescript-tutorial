# TypeScript Project with Bun

## Project Overview
This project has been migrated from Webpack to Bun while maintaining TypeScript configuration. The original webpack configuration has been preserved in backup files.

### Recent Changes (2025-10-03)
1. Migration from Webpack to Bun
   - Original package.json saved as `package.old.json`
   - New Bun configuration added in `bun.config.js`
   - Updated build and development scripts

## Installation
```bash
bun install
```

## Available Scripts
- `bun run start`: Starts the development server with hot reload
- `bun run build`: Builds the project for production
- `bun run dev`: Runs the development server with hot reload (alternative)

## Development Server
The development server runs on port 8081 by default. You can modify this in the `bun.config.js` file.

## Configuration Files
- `bun.config.js`: Bun specific configuration
- `tsconfig.json`: TypeScript configuration (preserved from original setup)
- `package.json`: Updated for Bun compatibility
- `package.old.json`: Preserved Webpack configuration

## Notes
- The original Webpack configuration has been preserved for reference
- TypeScript configuration remains unchanged
- Hot reload is enabled by default for development

For more information about Bun, visit [Bun's official documentation](https://bun.sh/docs)
