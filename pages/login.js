import React, { useEffect, useState } from 'react';
import Login from '../src/components/Auth/LoginComponents/Login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Spinner from '../src/components/Utils/Spinner';

const login = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useSelector(state => state.auth);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (user) {
            router.replace('/dashboard');
        }
        setLoading(false);
    });

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <Login />
        </>
    );
};

export default login;