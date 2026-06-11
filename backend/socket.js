const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');
const jwt = require('jsonwebtoken');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: process.env.FRONTEND_URL || 'http://localhost:5173',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {

        socket.on('join', async (data) => {
            const { userId, userType, token } = data;

            if (!token || !userId) {
                return socket.emit('error', { message: 'Unauthorized' });
            }

            let decoded;
            try {
                decoded = jwt.verify(token, process.env.JWT_SECRET);
                if (decoded._id.toString() !== userId.toString()) {
                    return socket.emit('error', { message: 'Unauthorized' });
                }
            } catch (err) {
                return socket.emit('error', { message: 'Unauthorized' });
            }

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });


        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {});
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.warn('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };