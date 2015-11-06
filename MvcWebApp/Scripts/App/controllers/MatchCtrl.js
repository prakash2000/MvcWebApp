// (function () {
//   var ListCtrl= ['$scope',function($scope)
//     {
//       $scope.Allmatches = [
//         { place: "Cardiff",    date: "8th-12th July" },
//         { place: "Lords",      date: "15th-19th July" },
//         { place: "Wellington", date: "22th-26th July" },
//         { place: "Yorkshire",  date: "29th-2nd August" },
//         { place: "Manchester", date: "5th-9th August" }   
//       ];
//     }];
//     angular
//     .module('ashes2015')
//     .controller('MatchListCtrl','ListCtrl');
// }());
app.controller("MatchListCtrl", function ($scope) {
    $scope.Allmatches = [
      { place: { city: "Cardiff", ground: 'Sofia Gardens' }, date: "8th-12th July", result: "England Won" },
      { place: "Lords", date: "16th-20th July", result: "Australia Won" },
      { place: "Edgebaston", date: "29th-26th July", result: "NA" },
      { place: "Yorkshire", date: "29th-2nd August", result: "England Won" },
      { place: "Manchester", date: "5th-9th August", result: "England Won" }
    ];
});


var listController = ["$scope", "matchService",
    function ($scope, matchService) {
        $scope.rowCollection = [];
        $scope.matches = [];

        matchService
            .get()
            .then(function (matches) {
                $scope.rowCollection = matches;
                $scope.matches = [].concat($scope.rowCollection);
            })
            .catch(function (error) {
                console.log(error);
            });
    }];
app.controller("MatchSaveCtrl", ["$scope", "matchService", function ($scope, matchService) {
    $scope.save = function (match) {
        if ($scope.NewMatchForm.$valid) {
<<<<<<< HEAD
            debugger;
=======
>>>>>>> origin/master
            matchService
                        .save(match)
                        .then(function (res) {
                            if (res.hasError) {
                                $scope.hasError = res.hasError;
                                $scope.error = res.status;
                                $scope.submitMsg = "Match not Added.Something went Wrong!!";
                            } else {
                                // $modalInstance.close({ id: res.id, name: gender.name                                
                                console.log(res)
<<<<<<< HEAD
                                $scope.match = {};
=======
                                $scope.user = {};
>>>>>>> origin/master
                                $scope.submitMsg = "New Match Added Successfully";
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
        }
        else
            $scope.NewMatchForm.$setDirty();
    };
}]);
app.controller('DatepickerCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
      ];

    $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };
});

angular
        .module("appdash")
        .service("matchListCtrl", listController);

