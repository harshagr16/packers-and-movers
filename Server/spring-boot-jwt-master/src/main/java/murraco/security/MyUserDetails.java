package murraco.security;

import lombok.RequiredArgsConstructor;
import murraco.model.AppUser;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import murraco.repository.UserRepository;

@Service
@RequiredArgsConstructor

//we configured our class with the @Service annotation, the application will automatically detect it during component-scan,
// and it will create a bean out of this class.


public class MyUserDetails implements UserDetailsService {
        //The UserDetailsService interface is used to retrieve user-related data.
        // It has one method named loadUserByUsername() which can be overridden to customize the process of finding the user.
        //It is used by the DaoAuthenticationProvider to load details about the user during authentication.


  private final UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //overridden to customize the process of finding the user.
    final AppUser appUser = userRepository.findByUsername(username);

    if (appUser == null) {
      throw new UsernameNotFoundException("User '" + username + "' not found");
    }

    return org.springframework.security.core.userdetails.User//
        .withUsername(username)//
        .password(appUser.getPassword())//
        .authorities(appUser.getAppUserRoles())//
        .accountExpired(false)//
        .accountLocked(false)//
        .credentialsExpired(false)//
        .disabled(false)//
        .build();
  }

}
