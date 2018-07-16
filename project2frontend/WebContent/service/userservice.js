<<<<<<< HEAD
/**
 * UserService
 * 1. Register - call the middleware -> dao -> insert user details in User table
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.register=function(user){
		return $http.post("http://localhost:8010/project2middleware/register",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8010/project2middleware/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8010/project2middleware/logout")
	}
     
	userService.updateProfile=function(user){//updated user profile
		return $http.put("http://localhost:8010/project2middleware/update",user)
	}
	
	return userService;
})
=======
/**
 * UserService
 * 1. Register - call the middleware -> dao -> insert user details in User table
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.register=function(user){
		return $http.post("http://localhost:8010/project2middleware/register",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8010/project2middleware/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8010/project2middleware/logout")
	}
     
	userService.updateProfile=function(user){//updated user profile
		return $http.put("http://localhost:8010/project2middleware/update",user)
	}
	
	return userService;
})
>>>>>>> ed1052ccbe7ed6879768238e01a0428dabbae07a
