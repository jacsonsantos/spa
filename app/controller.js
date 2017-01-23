var uri = 'http://127.0.0.1:8000/v1';

app.controller('AppCtrl', AppCtrl);

function AppCtrl($scope, $http, $state, $httpParamSerializerJQLike){
	
	$http.get(uri + '/users').then(
		function(d){
			console.log(d);
		},
		function(e){
			console.log(e);
		}
	);

	var data = {};

	$http.post(uri + '/users', data).then(
		function(d){
			console.log(d);
		},
		function(e){
			console.log(e);
		}
	);
}
