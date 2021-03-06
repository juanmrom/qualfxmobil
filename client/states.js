angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.mytaskdetails', {
        views: {
            app: {
                controller: 'app_mytaskdetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytaskdetails');
                }
            }
        }
    }).state('app.mytask', {
        views: {
            app: {
                controller: 'app_mytask',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytask');
                }
            }
        }
    });
});