//JavaScript Document

//create some variables to represent the objects we want to work with

var form = document.querySelector('form');
var inputs = document.getElementsByClassName('form-control');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please, fill out correctly the " + e.target.name + " field.");
            }
        };
        inputs[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }


