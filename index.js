// EXPRESS & de POORT
const express = require('express');
const app = express();
const port = 5000;

// EJS
app.set("views", "views");
app.set("view engine", "ejs");

// CSS
app.use(express.static("public"));

// JSON
const data = require('./data/exhibitions.json');

//ROUTES
app.get("/", function(request, response) {
  response.render("home", {
    items: data.portraits,
    pageTitle: "Museum"
  });
});

app.get("/exhibitions", function(request, response) {
  response.render("exhibitions", {
    pageTitle: "Exhibitions"
  });
});

app.get("/portraits", function(request, response) {
  response.render("portraits", {
    items: data.portraits,
    pageTitle: "Powerful Portraits"
  });
});

app.get("/portraits/:itemid", function(request, response) {
  response.render("exhibition-detail", {
    item: data.portraits[request.params.itemid],
    next_id: (data.portraits.length >= request.params.itemid  ? parseInt(+request.params.itemid + 1) : parseInt(999999)),
    prev_id: (request.params.itemid > 0 ? parseInt(request.params.itemid - 1) : parseInt(-1)),
    last_id: data.portraits.length - 1,
    pageTitle: "Powerful Portraits"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    pageTitle: "Contact"
  });
});

app.use(function(request, response){
  response.statusCode = 404;
  response.render("404", {
    pageTitle: "404"
  })
});

// Heroku Poort instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
