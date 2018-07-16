<<<<<<< HEAD
package com.niit.dao;

import com.niit.model.User;

public interface UserDao {
void registration(User user);
boolean isEmailUnique(String email);
User  login(User user);
void updateUser(User user);
User getUser(String email);
=======
package com.niit.dao;

import com.niit.model.User;

public interface UserDao {
void registration(User user);
boolean isEmailUnique(String email);
User  login(User user);
void updateUser(User user);
User getUser(String email);
>>>>>>> ed1052ccbe7ed6879768238e01a0428dabbae07a
}