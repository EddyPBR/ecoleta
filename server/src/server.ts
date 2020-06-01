import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json({
    name: "server",
    port: "3333",
    message: "Hello server :)"
  });
});

app.listen(3333);
