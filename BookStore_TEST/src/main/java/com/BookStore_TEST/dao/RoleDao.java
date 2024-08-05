package com.BookStore_TEST.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.BookStore_TEST.entity.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, String> {

}
