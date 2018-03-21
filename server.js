var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PythonShell = require('python-shell');
var myPythonScriptPath = "2.py";
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var pyshell = "";
io.on('connection', function(socket){

if(pyshell != ""){
 console.log("monster kill");
pyshell.childProcess.kill('SIGKILL');

}

pyshell = new PythonShell(myPythonScriptPath);


pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
});

});














http.listen(8080, '192.168.2.103');

