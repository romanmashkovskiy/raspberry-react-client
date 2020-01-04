import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { initializeStore } from './store';
import { ToastStyles, setupAxiosInterceptors, SocketClient } from './utils';

const socketClient = new SocketClient();

const store = initializeStore(undefined, socketClient);

setupAxiosInterceptors(store);

ReactDOM.render(
    <Provider store={ store }>
        <App/>
        <ToastStyles>
            <ToastContainer
                position='top-right'
                autoClose={ 3000 }
                hideProgressBar
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnVisibilityChange={ false }
                draggable
                pauseOnHover
            />
        </ToastStyles>
    </Provider>,
    document.getElementById('root'));