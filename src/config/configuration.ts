import * as process from 'node:process';

export default () => ({
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
});
