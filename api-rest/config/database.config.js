//Define url connect to database and port to listen
module.exports = {
    urlDB:  process.env.DB ||  'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1',
    port: process.env.PORT || 3000
}