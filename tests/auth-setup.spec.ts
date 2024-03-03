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
    fs.writeFileSync('.auth/token.txt', token);
    
    
    console.log(body.token);
    
})

const savedToken = fs.readFileSync('.auth/token.txt', 'utf-8');
setup('get user', async ({request}) => {
    const response = await request.get('/auth/me',{
        headers:{
            'Authorization':`${savedToken}`
        }
        
    })
    const body = await response.json();
    console.log(body);
})
