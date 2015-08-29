    var matchService = ["$http", "$q",
        function ($http, $q) {
            var self = this;

            self.get = function () {
                var deferred = $q.defer();

                $http
                    .get("api/administrator/match/get")
                    .success(function (res) {
                        deferred.resolve(res);
                    })
                    .catch(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            };

            self.save = function (user) {
                
                var deferred = $q.defer();
                
                $http
                    .post("api/MatchApi", angular.toJson(user))
                    .success(function (res) {
                        deferred.resolve(res);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            };
        }];

    angular
        .module("webapp")
        .service("matchService", matchService);
