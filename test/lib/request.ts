import 'dotenv/config';

import * as request from 'supertest';

const port = process.env.PORT || 8080;

const host = `localhost:${port}`;
const _request = request(host);

export default _request;
