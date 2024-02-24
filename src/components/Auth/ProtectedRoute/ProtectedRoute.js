import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Spinner from '../../Utils/Spinner';
import { setUser } from '../../../Store/Slices/authSlice';

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = JSON.parse(localStorage.getItem('user'));
            setLoading(true);
            if (data) {
                setLoading(false);
                dispatch(setUser(data));
            } else {
                Router.replace('/login');
                setLoading(false);
            }
        }
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    };

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;