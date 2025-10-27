# NestJS Prisma Todo


## Requirements
- Node 18+ / npm
- Docker & docker-compose (for DB and container testing)
- (Optional) Trivy for vulnerability scanning


## Setup (local development)
1. Install dependencies:
npm install

2. Make sure Postgres is available. Easiest: use docker-compose in this repo:
docker compose up -d db
Or run Postgres locally and update .env to point to it.

3. Generate Prisma client and run migration:
x prisma generate
npx prisma migrate dev --name init
# This will create the DB tables and a migration in prisma/migrations.

4. Start the app in dev mode:
npm run start:dev

5. Open http://localhost:3000 and use the endpoints:
POST /todos -> create

GET /todos -> list

GET /todos/:id -> get

PUT /todos/:id -> update

DELETE /todos/:id -> delete

# Bring up DB only
docker compose up -d db


# Generate client & migrate (from your host, not inside container)
npx prisma generate
npx prisma migrate dev --name init


# Start app (mounted volume will allow live changes)
docker compose up --build app

npx prisma studio

7. Test it using curl
## Use `curl` or Postman to call endpoints. Example:

# create
 curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"Buy milk","description":"2L"}'


# list
 curl http://localhost:3000/todos


8. Trivy scanning
Scan project filesystem
trivy fs .

# Build the image and scan it 
docker build -t nestjs-prisma-todo:latest .

trivy image nestjs-prisma-todo:latest
