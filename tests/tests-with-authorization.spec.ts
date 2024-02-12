import { test, expect } from '@playwright/test';
import { getAuthData } from '../utils';


test('auth', async ({request}) => {
    
    const authData = getAuthData();
    const autorization = await request.post('/auth/login',{
        data:{
            username: authData.username,
            password: authData.password
        }
    })
    const body = await autorization.json();
    const token = body.token;


    console.log(body.token);

})