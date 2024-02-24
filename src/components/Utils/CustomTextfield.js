import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const inputStyle = {
   width: '100%',
   backgroundColor: '#F8F9F9',
   borderRadius: '8px',
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: 'rgba(0, 0, 0, 0.18)',
         borderRadius: '8px'
      },
      '&:hover fieldset': {
         borderColor: 'rgba(0, 0, 0, 0.18)'
      },
      '&.Mui-focused fieldset': {
         borderColor: 'secondary.main'
      }
   }
};

const CustomTextfield = (
   {
      placeholder,
      name,
      type,
      register,
      errors
   }
) => {
   return (
      <Box sx={{ width: '100%' }}>
         <TextField
            variant='outlined'
            placeholder={placeholder}
            name={name}
            type={type}
            {...register(name, { required: true })}
            error={errors[name] ? true : false}
            sx={inputStyle}
         />
         <Typography
            sx={{
               textAlign: 'start',
               fontSize: '13px',
               marginTop: '4px',
               fontWeight: 600,
               color: 'red'
            }}>
            {errors[name]?.message}
         </Typography>
      </Box>
   );
};

export default CustomTextfield;