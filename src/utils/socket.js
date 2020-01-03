import io from 'socket.io-client';


export default class socketAPI {
    socket;

    connect() {
        const token = localStorage.getItem('authToken');

        this.socket = io.connect(process.env.REACT_APP_SOCKET_URL, {
            'query': 'token=' + token
        });
        return new Promise((resolve, reject) => {
            this.socket.on('connect', () => resolve());
            this.socket.on('connect_error', (error) => reject(error));
        });
    }

    disconnect() {
        return new Promise((resolve) => {
            this.socket.disconnect(() => {
                this.socket = null;
                resolve();
            });
        });
    }

    emit(event, data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');

            return this.socket.emit(event, data, (response) => {
                if (response.error) {
                    console.error(response.error);
                    return reject(response.error);
                }

                return resolve();
            });
        });
    }

    on(event, fun) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');

            this.socket.on(event, fun);
            resolve();
        });
    }
}