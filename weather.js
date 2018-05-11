
        var request = require('request');
        //var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e398c6676f0965bfa5ef4267d3bfaa2&q=Bangalore&units=metric' ;

        module.exports = function(location){
                
                return new Promise(function (resolve,reject) {
                
                var encodedlocation = encodeURIComponent(location);
                var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e398c6676f0965bfa5ef4267d3bfaa2&q='+encodedlocation+'&units=metric' ;
                
                        if (!location){
                                reject('no location provided');
                        }
                        request({url:url,
                                json:true}, function (error,response,body) {
                                        if (error) {
                                                reject('unable to fetch weather');
                                                                                
                                        } else if(body.cod !== 200) {
                                                //callback(JSON.stringify(body,null,4))
                                                return reject("location tracked but"+" "+body.message);}
                                                
                                                else {
                                                        
                                                resolve("it's "+body.main.temp+" "+ "in"+" "+body.name);
                                                
                                                        
                                                
                                                
                                                
                                        }
                                        
                                });
                

                });
                
                //callback('here is the current weather');
                
                
        }