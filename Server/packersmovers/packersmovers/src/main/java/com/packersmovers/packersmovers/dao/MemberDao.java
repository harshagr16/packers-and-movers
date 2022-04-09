package com.packersmovers.packersmovers.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.packersmovers.packersmovers.entities.Member;

public interface MemberDao extends JpaRepository<Member, Long>{

}
