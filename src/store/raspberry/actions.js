export const BLINK_REQUEST = 'BLINK_REQUEST';
export const CLEAR_REQUEST = 'CLEAR_REQUEST';

export const blink = () => ({
    type: BLINK_REQUEST,
    request: {
        url: 'toggle-led',
        method: 'post',
    },
});

export const clear = () => ({
    type: CLEAR_REQUEST,
    request: {
        url: 'clear',
        method: 'post',
    },
});