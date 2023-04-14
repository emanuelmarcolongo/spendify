import next from 'next'
import {prisma} from "../../lib/prisma"


beforeAll(async () => {
    await prisma.user.deleteMany({});
  });


describe('POST /api/register',  () => {
    it ('should respond with status 400 and invalid password data message', async () => {
        const body = JSON.stringify({
            name: 'test',
            email: 'oi@email.com',
            password: '123',
            confirmPassword: '12345'
        })

        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'application/json'
            }
          })

        expect(res.status).toBe(400);
        expect(await res.json()).toStrictEqual({"error": "As senhas devem ser iguais"})
        
    })

    it ('should respond with status 500 when some data is missing', async () => {
        const body = JSON.stringify({
            name: 'test',
            email: 'oi@email.com',
        })

        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'application/json'
            }
          })

        expect(res.status).toBe(500);
        
    })

    it ('should respond with status 201 when all data is valid', async () => {
        const body = JSON.stringify({
            name: 'test',
            email: 'oi@email.com',
            password: '123',
            confirmPassword: '123'
        })

        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'application/json'
            }
          })

          console.log('response', await res.json())

        expect(res.status).toBe(201);
        
    })

    it ('should respond with status 409 when email is already in use', async () => {
        const body = JSON.stringify({
            name: 'test',
            email: 'oi@email.com',
            password: '123',
            confirmPassword: '123'
        })

        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'application/json'
            }
          })

          console.log('response', await res.json())

        expect(res.status).toBe(409);    
    })
       
})