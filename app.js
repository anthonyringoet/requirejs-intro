require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "lib/underscore"
  }
});

require(['lib/modules/demo'], function(demo){
	var name = prompt('Tell me your name!');
	if(!name){
		name = 'mister anonymous';
	}
	// call method thats exposed in our demo.js module
	demo.showSalute(name);
});