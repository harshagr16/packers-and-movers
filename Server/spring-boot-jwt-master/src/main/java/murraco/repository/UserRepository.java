package murraco.repository;

import murraco.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<AppUser, Integer> {

  boolean existsByUsername(String username);

  AppUser findByUsername(String username);

  @Transactional //used ROLLBACK TRANSACTION to erase all data modifications made from the start of the transaction or to a savepoint.
  void deleteByUsername(String username);

}
