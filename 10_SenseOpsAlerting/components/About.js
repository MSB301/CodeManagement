define([
    // "client.property-panel/component-utils",
    "client.property-panel/components/components",
    "text!./About.html"
], function (components, template) {
    'use strict';

    var about = {
        template: template,
        controller: ["$scope", function ($scope) {
            $scope.version = 'Version February2024'
        }]
    }
    return components.addComponent("gi-infosnap", about)
});