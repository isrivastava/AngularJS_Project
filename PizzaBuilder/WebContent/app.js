/**
 * 
 */
var app = angular.module('app', []);

app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Red Pepper', 'Tomato', 'Onion', 'Olives', 'Ham', 'Chicken', 'Mushrooms', 'Pepperoni', 'Olives', 'Green Peppers'],
            toppings: [] 	
        };
        $scope.addTopping = function(topping){
            var toppingIndex = $scope.model.availableToppings.indexOf(topping);
            $scope.model.toppings.push(topping);
            $scope.model.availableToppings.splice(toppingIndex, 1);
            $scope.model.search = null;
            $scope.model.toppingAdded = true;
        }
    }
]);