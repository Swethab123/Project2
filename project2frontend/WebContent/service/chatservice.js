<<<<<<< HEAD
app.filter('reverse', function() 
	{
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

app.directive('ngFocus', function() 
	{
		return function(scope, element, attrs) {
			element.bind('click', function() {
				$('.' + attrs.ngFocus)[0].focus();
    });
  };
});

app.factory('ChatService', function($rootScope,$http)
	{
		var chatService={}
		chatService.getAllFriends=function(){
			return $http.get("http://localhost:8010/project2middleware/friends");
		}
	
	var ulist=$http.get("http://localhost:8010/project2middleware/friends");
	var socket = new SockJS('/project2middleware/chatmodule');
    var stompClient = Stomp.over(socket);
    stompClient.connect('', '', function(frame) {
      $rootScope.$broadcast('sockConnected', frame);
    });
    
    return {
      stompClient: stompClient,
      users:chatService.getAllFriends()
    };
});
=======
//This filter is used to display chat messages in reverse order ie from last index to 0 , latest message first
app.filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

	app.directive('ngFocus', function() {
	  return function(scope, element, attrs) {
	    element.bind('click', function() {
	      $('.' + attrs.ngFocus)[0].focus();
	    });
	  };
	});

	app.factory('ChatService', function($rootScope) {
	  alert('app factory')
	    var socket = new SockJS('/project2middleware/chatmodule');
	    var stompClient = Stomp.over(socket);
	    stompClient.connect('', '', function(frame) {
	      $rootScope.$broadcast('sockConnected', frame);
	    });

	    return {
	      stompClient: stompClient
	    };
	});
>>>>>>> ed1052ccbe7ed6879768238e01a0428dabbae07a
