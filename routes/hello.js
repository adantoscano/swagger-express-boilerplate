const { sayHelloTo } = require('../controllers/hello');

/**
 * @swagger
 *
 * /hello:
 *  get:
 *    summary: Returns greetings
 *    parameters:
 *      - in: query
 *        name: name
 *        description: name to greet
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: hello
 *        schema:
 *          type: string
 */
module.exports = app => {
  app.get('/hello', (req, res) => {
    res.send(sayHelloTo(req.query.name));
  });
};
