// define dependency array followed by the actual module function
define(['underscore', 'jquery'], function() {
    // do your thing here
    var showSalute = function(n){
        // compile a template with underscore
        // just for the sake of testing dependencies
        var tmp = _.template("Dear <%= name %>, this is probably the lamest demo ever. <br />I'm sorry for your time.");
        $('body').append(tmp({name: n}));
    };
    // return only properties you want to expose
    return{
        showSalute : showSalute
    };
});