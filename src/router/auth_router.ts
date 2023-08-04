import { register } from 'controllers/auth_controller';
import express from 'express';

export default (router: express.Router) => {
    router.post('/auth/register', register);
}