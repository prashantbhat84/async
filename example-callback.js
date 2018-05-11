/* var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e398c6676f0965bfa5ef4267d3bfaa2&q=Goa&units=metric' ; */
var weather = require('./weather.js');
/* request({url:url,
          json:true}, function (error,response,body) {
                    if (error) {
                             console.log('unable to fetch weather');
                                                           
                    } else {
                            //console.log(JSON.stringify(body,null,4));
                            console.log("it's "+body.main.temp+" "+ "in"+" "+body.name);
                            
                                     
                          
                            
                              
                    }
                    
          });
          console.log('after request'); */
          weather(function(currentweather){
                      console.log(currentweather);
                      
          });
          