/* function dowork(shouldfail) {
          return new Promise(function (resolve, reject) {
               setTimeout(function () {
                         if (typeof shouldfail ==='boolean'&& shouldfail===true) {
                                   reject('errormessage');
                         } else {
                              resolve('success message');
                         }
                         
                         
               },1000)     
          });
}
dowork(true).then(function (message) {
          console.log(message);
          
          return dowork(true);
}).then(function (message) {
          console.log(message);
          
          console.log('all done');
          
}).catch(function (error) {
          console.log(error);
          
}); */

function getLocation() {
          return new Promise(function (resolve, reject) {
                    resolve('New yourk');
          });
          
}
function getWeather(location) {
          return new Promise(function (resolve, reject) {
                    resolve('its 75 in :'+ location);
          });
}
getLocation().then(function (loc) {
          
         return   getWeather(loc);
          
}).then(function (weather) {
          console.log(weather);
          
          
}).catch(function (error) {
         console.log(error);
          
});