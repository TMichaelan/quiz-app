import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import Center from './Center'

const getFreshModel = () => ({
    name: '',
    email: '',
})

export default function Login() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
     } = useForm(getFreshModel);


     const login = e => {
        e.preventDefault();
        console.log(values)
     }

    return (

        <Center>
            <Card sx={{
                width: '400px'
            }}>
                <CardContent sx={{ textAlign: 'center' }}>

                    <Typography variant="h3" sx={{ my: 3 }}>Quiz app</Typography>
                    <Box sx={{
                        '&  .MuiTextField-root': {
                            margin: 1,
                            width: '90%'
                        }

                    }}>
                        <form noValidate autoComplete='off'  onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                variant='outlined'
                                value={values.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Name"
                                name="name"
                                variant='outlined'
                                value={values.name}
                                onChange={handleInputChange}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{ width: '90%' }}
                            >Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>


    )
}
