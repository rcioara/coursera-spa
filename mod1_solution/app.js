(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    $scope.checkIfTooMuch = function() {
        if($scope.dishes !== undefined && $scope.dishes !== ''){
            var dishesTmp = $scope.dishes.split(',');
            if(dishesTmp.length <= 3){
                $scope.message =  "Enjoy!";
            }else{
                $scope.message = "Too much!";
            }

        }else{
            $scope.message = "Empty";
        }
    }
}

})();
