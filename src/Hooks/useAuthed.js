import { useState, useEffect } from 'react';

const useAuthed = (user) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (user && !user.isConfirmed) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false)
        }
    }, [user]);

    return isAuthenticated;
};

export default useAuthed;
