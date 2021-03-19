After generating the projecting follow the guide 
https://github.com/Ironhack-WDFT-October-2020/guides/blob/master/project-3-structure.md

To switch fully from handlebars to react

#1. 
In the root app.js, the following lines are commented out:
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

#2. 
Remove the views folder

#3 
in bin/www, comment out hbs and comment in react:
// catch 404 and render a not-found.hbs template
app.use((req, res, next) => {
  res.status(404);
  // res.render('not-found'); //hbs
  res.json('not-found') //react
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    // res.render('500-error'); //hbs
    res.json('500-error')//react
  }
});

#4
Remember to launch both the server and the client

- In root : nodemon run
- In client : npm start