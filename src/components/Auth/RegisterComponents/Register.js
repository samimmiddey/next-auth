import { CircularProgress, Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomTextfield from '../../Utils/CustomTextfield';
import CustomButton from '../../Utils/CustomButton';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation';
import { setUser } from '../../../Store/Slices/authSlice';
import { useState } from 'react';
import { useRouter } from "next/router";

const contanierStyle = {
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center'
};

const formStyle = {
    maxWidth: '400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    alignItems: 'center',
    justifyContent: 'flex-start',
};

const loginTextStyle = {
    fontSize: '3rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1rem'
};

const fields = [
    {
        label: 'Email',
        placeholder: 'Enter Your Email',
        name: 'email',
        type: 'email'
    },
    {
        label: 'Password',
        placeholder: 'Enter Your Password',
        name: 'password',
        type: 'password'
    }
];

const defaultValues = {
    email: '',
    password: ''
}

const Register = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid')
            .matches(/^([a-z0-9_.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/, 'Please enter a valid email address'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/, 'Must contain one one digit, one uppercase & one lowercase')
    });

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValues
    });

    // Handle Register
    const handleRegister = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post('api/register', {
                email: data.email,
                password: data.password
            });

            if (res.data.success) {
                dispatch(setUser({
                    email: res.data.email
                }));
                localStorage.setItem('user', JSON.stringify({ email: res.data.email }));
                router.push('/dashboard');
                setLoading(false);
            };

        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Container fixed sx={contanierStyle}>
            <form
                style={formStyle}
                onSubmit={handleSubmit((data) => handleRegister(data))}
            >
                <Typography sx={loginTextStyle}>Register</Typography>
                {
                    fields.map((item, index) => (
                        <CustomTextfield
                            key={item.name}
                            placeholder={item.placeholder}
                            name={item.name}
                            type={item.type}
                            register={register}
                            errors={errors}
                        />
                    ))
                }
                <CustomButton
                    type='submit'
                    loading={loading}
                    text={loading ? <CircularProgress size={25} sx={{ color: '#aaa' }} /> : 'Login'}
                />
            </form>
        </Container>
    );
};

export default Register;