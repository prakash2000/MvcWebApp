var matchService = ["$http", "$q",
      function ($http, $q) {
          var self = this;

          self.get = function () {
              var deferred = $q.defer();

              $http
                  .get("api/matchapi")
                  .success(function (res) {
                      deferred.resolve(res);
                  })
                  .catch(function (error) {
                      deferred.reject(error);
                  });

              return deferred.promise;
          };

          self.save = function (match) {
<<<<<<< HEAD
              debugger;
              var deferred = $q.defer();
              $http
                  .post("api/matchapi", angular.toJson(match))
                  .success(function (res) {
                      deferred.resolve(res);
                  })
                  .error(function (error) {
                      deferred.reject(error);
                  });

              console.log(deferred.promise)
              debugger;
              return deferred.promise;
          };
      }];

=======

              var deferred = $q.defer();
              $http
                  .post("api/matchapi", angular.toJson(match))
                  .success(function (res) {
                      deferred.resolve(res);
                  })
                  .error(function (error) {
                      deferred.reject(error);
                  });

              console.log(deferred.promise)
              return deferred.promise;
          };
      }];

>>>>>>> origin/master
angular
    .module("appdash")
    .service("matchService", matchService);
