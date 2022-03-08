import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';

const app = express();
export const server = http.createServer(app);
const port = 5050;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTION', 'PATCH', 'DELETE'],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.use('/socket.io', Socket);
app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello code!');
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
