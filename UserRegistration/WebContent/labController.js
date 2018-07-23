/**
 * 
 */
var app = angular.module('app',['ngResource','registrationService']);
app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function submit(model) {
            registration.submit(model).$promise
                .then(function (response) {
                    alert('success');
                },
                function (response) {
                    alert('error');
                });
        }

        function reset() {
            $scope.model = {};
        }
    }
]);
