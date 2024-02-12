import { test, expect } from '@playwright/test';



test('@smoke get product', async({request}) =>{

    const response = await request.get('https://dummyjson.com/products/1')
    expect(response).toBeOK()


})
test('@smoke get categories', async({request})=>{
    const response = await request.get('https://dummyjson.com/products/categories/')
    const body = await response.json()

    expect(response).toBeOK
    expect(body).toContain("smartphones")

    
    console.log(body);

} )