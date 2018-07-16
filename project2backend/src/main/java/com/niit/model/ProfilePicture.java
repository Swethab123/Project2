<<<<<<< HEAD
package com.niit.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="profilepic_s180396")
public class ProfilePicture {
	@Id
private String email;
	@Lob
private byte[] image;
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public byte[] getImage() {
	return image;
}
public void setImage(byte[] image) {
	this.image = image;
}

=======
package com.niit.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="profilepic_s180396")
public class ProfilePicture {
	@Id
private String email;
	@Lob
private byte[] image;
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public byte[] getImage() {
	return image;
}
public void setImage(byte[] image) {
	this.image = image;
}

>>>>>>> ed1052ccbe7ed6879768238e01a0428dabbae07a
}