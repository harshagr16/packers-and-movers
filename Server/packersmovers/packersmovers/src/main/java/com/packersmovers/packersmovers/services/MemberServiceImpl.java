package com.packersmovers.packersmovers.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.packersmovers.packersmovers.dao.MemberDao;
import com.packersmovers.packersmovers.entities.Member;
@Service

//this class is working as Service layer and it will provide implementation.
public class MemberServiceImpl implements MemberService{
	
	@Autowired // Automatic wiring... injects dependencies
	//It will create object of it's implementation class and will provide here.
	private MemberDao memberDao; 

//	List<Member> list;
	public MemberServiceImpl()
	{
//		list= new ArrayList<>();
//		list.add(new Member(145, "Monika", "Sharma", "m@gmail.com", "abc@123", 45632158, "fbd delhi"));
//		list.add(new Member(146, "Sonika", "Soni", "s@gmail.com", "cd@123", 8624522, "noida delhi"));
//		
	}
	
	@Override
	public List<Member> getMembers() {
		// TODO Auto-generated method stub
		return memberDao.findAll(); 
		
		//will fetch data from db.. will make them objects and then it will add to list.
	}

	@Override
	public Member getMember(long memberId) {

		return memberDao.getById(memberId);
		//to return single object with given memberId.
//		Member m=null;
//		for(Member member:list)
//		{
//			if(member.getId()==memberId) 
//			{
//				m=member;
//			break;
//			
//			}
//		}
	
}

	@Override
	public Member addMember(Member member) {

//		list.add(member);
		memberDao.save(member);
		return member;
	}

	@Override
	public Member updateMember(Member member) {
//		list.forEach(e -> {
//			if(e.getId()== member.getId())
//			{
//				e.setFirstname(member.getFirstname());
//				e.setLastname(member.getLastname());
//				e.setEmail(member.getEmail());
//				e.setPassword(member.getPassword());
//				e.setMobile(member.getMobile());
//				e.setAddress(member.getAddress());
//			}
//		});
		memberDao.save(member);
		return member;
		
	}
	
	@Override
	public void deleteMember(long parseLong) {
		
		Member entity=memberDao.getById(parseLong);
		memberDao.delete(entity);
				
		
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
	} 
	//it will fetch data that are not equal to the given id and will store all the data in a list.
	//will remove the item from list with id that you entered in the method.

	
	}
