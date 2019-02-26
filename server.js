var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
var user = {
    "user3" : {
        "name" : "ramesh",
        "password" : "password3",
        "profession" : "clerk",
        "id": 3
     }
}
app.post('/addUser/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     data["user"+req.params.id] = user["user"+req.params.id];
    fs.writeFile("users.json",JSON.stringify(data)+"\n",{spaces:2}, function (err) {
        if (err) throw err;
       // alert(data);
       console.log('Saved!');     
      });
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 
     /*
 app.post('/appendUser', function (req, res) {
    // First add existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
        data["user5"] = user["user5"]; 
       fs.appendFile("users.json",JSON.stringify(data["user5"]), function (err) {       
        if (err) throw err;       // alert(data);
       console.log('Saved!');     
      });
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
*/
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id];
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

 app.delete('/deleteUser/:id', function (req, res) {
    // deleting existing users.
       fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id]; 
       fs.writeFile("users.json",JSON.stringify(data)+"\n",{spaces:2}, function (err) {
        if (err) throw err;
       // alert(data);
       console.log('Saved!');     
      });
       console.log( data );
       res.end( JSON.stringify(data));
    });
       /*   
       fs.writeFile("users.json",JSON.stringify(data["user"]), function (err) {
        if (err) throw err;       // alert(data);
       console.log('Saved!');   

      });    
      */
       console.log( data );
       res.end( JSON.stringify(data));
    });
 
 
   var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})