//(function (module) {
//    'use strict';

//    module.controller("DatePickerController",
//        [
//            "$scope", "$timeout",
            function DatePickerController ($scope, $timeout) {

                // Disable weekend selection
                $scope.disabled = function (date, mode) {
                    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 7));
                };

                $scope.routineMinDate = Date.today();
                //$scope.routineMaxDate = $scope.model.deadline || new Date($scope.routineMinDate).addYears(2);
                $scope.routineMaxDate = new Date($scope.routineMinDate).addYears(2);

                $scope.completionMinDate = Date.today();
                $scope.completionMaxDate = new Date($scope.completionMinDate).addYears(2);

                $scope.openRoutineDeadline = function () {
                    $scope.openedRoutineDeadline = true;
                };

                $scope.openCompletionDeadline = function ($event) {

                    //if ($scope.model.routineDeadline)
                    //    $scope.completionMinDate = $scope.model.routineDeadline;
                    $timeout(function () {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.openedCompletionDeadline = true;
                    });
                };

                $scope.dateOptions = {
                    'year-format': "'yy'",
                    'starting-day': 1
                };

            }
//            ]);
//}(angular.module("app")));