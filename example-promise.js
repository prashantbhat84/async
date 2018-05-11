/* function doWork(data,callback){
      callback('done');
}
function doWorkPromise(data) {
      return new Promise(function (resolve,reject) {
      setTimeout(function () {
            reject('everything is broken');
      },2000);        
      
                  reject({
                        error:'something bad happened'
                  });
                  
      });
}
doWorkPromise('hello').then (function(data){
console.log(data);

},function(error){
console.log(error);

});
*/
var request = require('request');
function getWeather(location){
return new Promise(function(resolve,reject){
      var encodedlocation = encodeURIComponent(location);
      var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e398c6676f0965bfa5ef4267d3bfaa2&q='+encodedlocation+'&units=metric' ;
      
      if (!location){
            return reject('no location provided');
      }
      //callback('here is the current weather');
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

}
getWeather().then(function(data){
console.log(data);

},function (error) {
console.log(error);

});
