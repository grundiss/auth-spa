import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

export function main(root) {
  const app = express();

  app.use(bodyParser.json());
  app.use(cookieParser())

  app.use(
    "/static",
    express.static(path.join(root, "dist/static"), { extensions: ["js"] })
  );

  app.get("/users/current/", function(req, res) {
    const {auth} = req.cookies;
    if(auth) {
      res.json({username: auth});
    } else {
      res.sendStatus(401);
    }
  });

  app.post("/users/logon/", function(req, res) {
    const { password, username } = req.body;

    if(password === 'secret') {
      res.cookie("auth", username, {httpOnly: true});
      res.json({username});
    } else {
      res.sendStatus(400);
    }
  });

  app.get("/*", function(req, res) {
    res.send(`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>auth-spa</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          <style>
            body {font-family: 'Roboto', sans-serif;}
          </style>
        </head>
        <body>
          <div id="app"></div>
          <script type="text/javascript" src="/static/bundle.js"></script>
        </body>
      </html>
    `);
  });

  app.listen(3000, function() {
    console.log("App is running and listening port 3000");
  });
}
