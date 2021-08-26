import express from 'express';

let app = require('./server').default;

if (module.hot) {
    module.hot.accept('./server', () => {
        console.info('🔁  HMR Reloading `./server`...');
        try {
            // eslint-disable-next-line  global-require
            app = require('./server').default;
        } catch (error) {
            console.error(error);
        }
    });
    console.info('✅  Server-side HMR Enabled!');
}

const port = Number(process.env.PORT) || 3000;

export default express()
    .use((req, res) => app.handle(req, res))
    .listen(port)
    .on('error', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.info(`> Started on port ${port}`);
    });
