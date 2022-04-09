package com.packersmovers.packersmovers.services;

import java.util.List;

import com.packersmovers.packersmovers.entities.Member;

public interface MemberService {

	public List<Member> getMembers();
	
	public Member getMember(long memberId);
	public Member addMember(Member member);
	public Member updateMember(Member member);
	public void deleteMember(long parseLong);
	
}
