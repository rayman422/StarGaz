# Star Gaze (Full Build - September 2025)

A secure Bitcoin Lightning creator platform. Built with Next.js, Express, Supabase, Docker, and Voltage for Lightning.

## Setup
1. Clone and cd into repo.
2. Copy env examples: `cp env.example .env` etc.
3. Install: `npm i; cd frontend && npm i; cd ../backend && npm i; cd ../scripts && npm i`
4. Init DB: Run schema in Supabase, then `cd scripts && npm run init-db && npm run seed`
5. Start: `docker compose -f docker/docker-compose.yml up -d --build`
6. Access: Frontend @ localhost:3000, API @ 4000.

See docs for deployment. Security-first: Rotate keys, enable RLS day one!