angular
	.module( APPNAME )
	.directive('description', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) 
			{
				$scope.title = $attrs.title || 'Warning: untitled application';
				$scope.url = $attrs.url || 'Warning: no url defined';
				$scope.keywords = $attrs.keywords || 'Warning, no, keywords';
				$scope.image = $attrs.image || 'Warning: no image defined';
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: getPartial('directives/description.html'),
			// replace: true,
			transclude: true,
			compile: function(tElement, tAttrs, transclude)
			{ 
				return {
					pre: function($scope)
					{
						transclude($scope, function(clone)
						{
							$scope.description = clone[0].textContent || 'Warning: no application description';
						})
					}
				}
			},
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);