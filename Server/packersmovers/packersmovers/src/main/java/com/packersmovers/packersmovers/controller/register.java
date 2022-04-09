package com.packersmovers.packersmovers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.packersmovers.packersmovers.entities.Member;
import com.packersmovers.packersmovers.services.MemberService;



@Controller
public class register {
	
	@Autowired
	private MemberService memberService;
	//As per the rule of dependency injection, it will fetch obj. of MemberServiceImpl class and will inject into "memberService" variable.	
	//supports loose coupling. and finally it will call getMembers() function.
	
	@GetMapping("/Home")
	
public String home()
{
	return " this is home page";
}
	
	//get members..
	
	@GetMapping("/Member")
	public List<Member> getMembers()
	{
		return this.memberService.getMembers();
	}
	
	//it will give run-time polymorphism. As interface don't have method body so, it will call child class's method.
	//will return the list added into implementation class of this interface.

	//to get single member..
	
	@GetMapping("Member/{memberId}")
	public Member getMember(@PathVariable String memberId)
	{
		return this.memberService.getMember(Long.parseLong(memberId));
	}
	
	
	@PostMapping("/Member")
	public Member addMember(@RequestBody Member member)
	{
	return this.memberService.addMember(member);
	}
	
	@PutMapping("/Member")
	public Member updateMember(@RequestBody Member member)
	{
		return this.memberService.updateMember(member);
	}
	
	@DeleteMapping("/Member/{memberId}")
	public ResponseEntity<HttpStatus> deleteMember(@PathVariable String memberId) //response status mentioned as generic type.
	{
		try
		
		{
			this.memberService.deleteMember(Long.parseLong(memberId)); //calling the service
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}




