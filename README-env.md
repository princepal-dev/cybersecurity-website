# Environment Configuration

This project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

## Required Environment Variables

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Development Setup

1. Copy the example above to `.env.local`
2. Modify the URLs for your environment

## Production Setup

For production deployment, set the environment variables in your hosting platform:

```bash
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Available Variables

- `NEXT_PUBLIC_API_URL`: Base URL for the backend API (includes protocol, host, and port)
