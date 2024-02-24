import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setErrorModal } from '../../Store/Slices/authSlice';
import Image from 'next/image';

const style = theme => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   maxWidth: 400,
   width: '100%',
   bgcolor: 'background.paper',
   boxShadow: 24,
   padding: '2rem 1.5rem',
   borderRadius: '10px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '1rem',
   "&:focus": {
      outline: 'none'
   },
   [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem'
   }
});

const titleStyle = {
   fontWeight: 700,
   textAlign: 'center',
   marginBottom: '5px',
   fontSize: '2rem',
   color: 'text.primary'
};

const textPara = {
   fontSize: '16px',
   textAlign: 'center',
   color: 'text.secondary'
};

const buttonStyle = {
   textTransform: 'none',
   marginTop: '5px'
};

const ErrorModal = () => {
   const { errorModal, errorText } = useSelector(state => state.auth);
   const dispatch = useDispatch();

   return (
      <Box>
         <Modal sx={{ margin: '0 1rem' }}
            open={errorModal}
            onClose={() => dispatch(setErrorModal(false))}
         >
            <Box sx={style}>
               <Image style={{ marginBottom: '-1rem' }} src='/error.png' width={75} height={75} alt='' />
               <Box>
                  <Typography color='secondary' sx={titleStyle}>
                     Oh Snap!
                  </Typography>
                  <Typography color='primary' sx={textPara}>
                     {errorText}
                  </Typography>
               </Box>
               <Button
                  onClick={() => dispatch(setErrorModal(false))}
                  color='primary'
                  variant='contained'
                  sx={buttonStyle}
               >
                  Dismiss
               </Button>
            </Box>
         </Modal>
      </Box>
   );
}

export default ErrorModal;