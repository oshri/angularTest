/**
 * Created by oshrikdoshim on 4/6/14.
 */
'use strict';

angular.module('testApp').controller("userCtrl", function($scope){
    $scope.customers =  [
        { "name":'John Smith', "city":'New York'},
        { "name":'Gilad Glasberg', "city":'Tel Aviv'},
        { "name":'Shai Reznik', "city":'Rishon Lezion'}
    ];
});