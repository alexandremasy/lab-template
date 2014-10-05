angular
	.module( APPNAME )
	.controller('OptionsController', 
		function($scope, Options)
		{
			if ( Options.scope == null )
				Options.scope = $scope;
			else
				$scope = Options.scope;

			$scope.value = 10;

			$scope.$watch('quantity', function()
			{
				console.log('change');
			})
		}
	)
;