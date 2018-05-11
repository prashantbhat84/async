                var request = require('request');
                var weather = require('./weather.js');
                var location =require('./location.js');
                var argv =require('yargs')
                .options('location',{
                        alias:'l',
                        demand: true,
                        description:'location to fetch weather',
                        type: 'string'
                })
                .help('help')
                .argv;

                // set up yargs to have a  location  or -l argument

                        /* weather(function(currentweather){
                                console.log(currentweather);
                                
                        });
                        location(function(location){
                                if (!location) 
                                {
                                        console.log('unable to fetch location');
                                        return;
                                        
                                        
                                }
                                console.log('City:'+location.city);
                                console.log('Long/lat'+location.loc);
                                
                                
                        }); */
                        
                        if (typeof argv.l ==='string' && argv.l.length>0) {
                                
                                console.log('location is provided');
                                /* weather(argv.l,function(currentweather){
                                        console.log(currentweather);
                                }); */
                                

                        weather(argv.l).then(function (currentweather) {
                                console.log(currentweather);
                                
                        }).catch(function (error) {
                                console.log(error);
                                
                });
                                
                        }
                        else {
                                console.log('location was guessed based on your IP address');
                                
                        /* location(function (location) {
                                if (location) {
                                        weather(location.city,function(currentweather){
                                        console.log(currentweather);
                                        
                                        });     
                                }
                                else {
                                        console.log('unable to guess location');
                                        

                                }
                                
                        });  */

                        location().then(function(loc){
                                return weather(loc.city);
                        }).then(function (currentweather) {
                                console.log(currentweather);
                                
                        }).catch(function (error) {
                                console.log(error);
                                
                        });     

                        
                        }
