angular.module('myModule', ['schemaForm', 'ui.sortable'])
  .controller('FormController', function($scope) {
    var ctrl = this;
    ctrl.onSubmit = function (form) {
      $scope.$broadcast('schemaFormValidate');
      if(form.$valid) {
        console.log(ctrl.models);
      }
    };

    //ctrl.schema = {
    //  "$schema": "http://json-schema.org/draft-04/schema#",
    //  "id": "http://example.com/root.json",
    //  "properties": {
    //    "models": {
    //      "id": "http://example.com/root.json/models",
    //      "items": {
    //        "id": "http://example.com/root.json/models/0",
    //        "properties": {
    //          "name": {
    //            "default": "",
    //            "description": "An explanation about the purpose of this instance.",
    //            "id": "http://example.com/root.json/models/0/name",
    //            "title": "The Name schema.",
    //            "type": "string",
    //            "x-schema-form": {
    //              "placeholder": "Don't hold back"
    //            }
    //          },
    //          "user": {
    //            "default": "",
    //            "description": "An explanation about the purpose of this instance.",
    //            "id": "http://example.com/root.json/models/0/user",
    //            "title": "The User schema.",
    //            "type": "string"
    //          }
    //        },
    //        "required": ["user", "name"],
    //        "type": "object"
    //      },
    //      "type": "array"
    //    }
    //  },
    //  "type": "object"
    //};

    ctrl.schema = {
      "type": "object",
      "properties": {
        "models": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              title: {
                type: "string",
                enum: ['dr','jr','sir','mrs','mr','NaN','dj']
              },
              "name": {
                "type": "string"
              },
              "user": {
                "type": "string"
              }
            }
          }
        }
      }
    };

    ctrl.form = [
      {
        "type": "help",
        "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
      },
      {
        "key": "models",
        "add": "New",
        remove: "Delete",
        "style": {
          "add": "btn-success",
          remove: "btn-danger"
        },
        "items": [
          "models[].name",
          "models[].title",
          {
            "key": "models[].user",
            "condition": "model.models[arrayIndex].title === 'sir'"
          }
        ],
        startEmpty: true
      },
      {
        type: "submit",
        title: "Save"
      }
    ];

    ctrl.model = [];
  });
