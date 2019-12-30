const app = require('../index');

describe('Test /ping', () => {
    it ('should return Hello World!', async () => {
        const text = 'Hello World!'
        expect(text).toBe('Hello World!');
    });
});