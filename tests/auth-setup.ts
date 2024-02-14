import {test as setup}  from '@playwright/test';
import { getAuthData } from '../utils';
import fs from 'fs'


const token = './.auth/token.json'

setup('auth', async ({request}) => {
    
    const authData = getAuthData();
    const response = await request.post('/auth/login',{
        data:{
            username: authData.username,
            password: authData.password
        }
    })
    const body = await response.json();
    const token = body.token;
    fs.writeFileSync('token.txt', token);
    
    
    console.log(body.token);
    
})