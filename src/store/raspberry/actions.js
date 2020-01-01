export const BLINK_REQUEST = 'BLINK_REQUEST';


export const blink = () => ({
    type: BLINK_REQUEST,
    request: {
        url: 'blink',
        method: 'post',
    },
});