var mongoose = require( 'mongoose' );


var dbURI = 'mongodb://localhost/originalproject3';
mongoose.connect(dbURI);

var readLine = require ("readline");
if (process.platform === "win32"){
    var r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.on ("SIGINT", function (){
        process.emit ("SIGINT");
    });

}

mongoose.connection.on ('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on ('error', function (err) {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on ('disconnected', function () {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback){
    mongoose.connection.close(function (){
        console.log('Mongoose disconnected through ' + msg);
    });
};

process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUR2');
    });
});

process.once('SIGINT', function () {
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});
