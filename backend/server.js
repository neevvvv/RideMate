const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const REQUIRED_ENV = [ 'DB_CONNECT', 'JWT_SECRET', 'GEOAPIFY_API_KEY' ];
const missing = REQUIRED_ENV.filter(key => !process.env[ key ]);
if (missing.length) {
    console.error(`Missing required environment variables: ${missing.join(', ')}`);
    console.error('Copy backend/.env.example to backend/.env and fill in the values.');
    process.exit(1);
}

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});