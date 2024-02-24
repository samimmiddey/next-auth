import React, { useEffect, useState } from 'react';
import Register from '../src/components/Auth/RegisterComponents/Register';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Spinner from '../src/components/Utils/Spinner';

const register = () => {
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
            <Register />
        </>
    );
};

export default register;