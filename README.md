# JEPARDY

This is a Jepardy game, backend using Flask, MySQL, frontend using React.

## Getting Started

1. Install dependencies for frontend
```
cd frontend && npm install
```

2. Make sure you have python3 and docker-compose installed.

3. Install dependencies for backend
```
cd backend && pip install -r ./requirememnts.txt
```

## Run local environment

To get a local environment running:

1. Run docker-compose:
```
docker-compose up
```
It will setup a container with a MySQL db.

2. Inside backend directory, run:
```
 python prepare_db.py 
 ```
 It will add data to MySQL db

 3. In root, run:
 ```
 npm run start:dev
 ```
 It will start both flask server and dev server for the frontend.




