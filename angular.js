angular.module('app', []);

angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;
    vm.output = "Your result will be displayed here"
    vm.planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];
    vm.planets = vm.planets.reverse();
    vm.calculateWeight = function() {
        vm.total = vm.userWeight * vm.planet[1];

        vm.output = "Your weight on " + vm.planet[0] + " is " + vm.total + "lbs";



    }






}
