package com.packersmovers.packersmovers.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Member {
	@Id
	  //@GeneratedValue(strategy = GenerationType.SEQUENCE)
private long id;
	//@Column(name="FirstName")
private String firstname;
	//@Column(name="LastName")

private String lastname;
	//@Column(name="Email")

private String email;
	//@Column(name="Password")

private String password;
	//@Column(name="Mobile")

private int mobile;
	//@Column(name="Address")

private String address;

public Member(long id, String firstname, String lastname, String email, String password, int mobile, String address) {
	super();
	
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.password = password;
	this.mobile = mobile;
	this.address = address;
}
public Member() {
	super();
	// TODO Auto-generated constructor stub
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public int getMobile() {
	return mobile;
}
public void setMobile(int mobile) {
	this.mobile = mobile;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
@Override
public String toString() {
	return "Member [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
			+ ", password=" + password + ", mobile=" + mobile + ", address=" + address + "]";
}


}
