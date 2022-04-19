package murraco;

import lombok.RequiredArgsConstructor;
import murraco.model.AppOrder;
import murraco.model.AppUser;
import murraco.model.AppUserRole;
import murraco.service.OrderService;
import murraco.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
@RequiredArgsConstructor
public class JwtAuthServiceApp implements CommandLineRunner {

  final UserService userService;
  final OrderService orderService;

  public static void main(String[] args) {
    SpringApplication.run(JwtAuthServiceApp.class, args);
  }

  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }

  @Override
  public void run(String... params) throws Exception {
    AppUser admin = new AppUser();
    admin.setFirstname("Chenn");
    admin.setLastname("Sharma");
    admin.setUsername("admin");
    admin.setPassword("admin");
    admin.setEmail("admin@email.com");
    admin.setMobile(1234567891L);
    admin.setAddress("delhi");
    admin.setAppUserRoles(new ArrayList<AppUserRole>(Arrays.asList(AppUserRole.ROLE_ADMIN)));

    userService.signup(admin);

    AppUser client = new AppUser();
    client.setFirstname("Venn");
    client.setLastname("Shama");
    client.setUsername("client");
    client.setPassword("client");
    client.setEmail("client@email.com");
    client.setMobile(1987266745);
    client.setAddress("Hyderabad");
    client.setAppUserRoles(new ArrayList<AppUserRole>(Arrays.asList(AppUserRole.ROLE_CLIENT)));

    userService.signup(client);


    AppOrder o1=new AppOrder();
    o1.setFirstname("Tom");
    o1.setLastname("Harry");
    o1.setEmail("tom@email.com");
    o1.setMobile(1987116745);
    o1.setAddress("London");
    o1.setService_type("House shifting");
    o1.setSource("abc");
    o1.setDestination("efg");
    o1.setMoving_date("2022-20-04");

    orderService.addorder(o1);
  }
}

//Test as:

//{
//        "firstname":"Monika",
//        "lastname":"Parashar",
//        "username": "monikag",
//        "email":"monika@gmail.com",
//        "password":"monikag",
//        "mobile": 1236549875,
//        "address":"Mumbai",
//        "appUserRoles": [
//        "ROLE_ADMIN"
//        ]
//}
//
//{        "firstname":"Shweta",
//        "lastname":"Sharma",
//        "username": "shweta",
//        "email":"shweta@gmail.com",
//        "password":"shweta",
//        "mobile": 1231549875,
//        "address":"Faridabad",
//        "appUserRoles": [
//        "ROLE_ADMIN"
//        ]
//        }
//

//Bearer-token:
//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHdldGEiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2NTAzNDMzMDIsImV4cCI6MTY1MDM0MzYwMn0.BEmmUi9viQPJ8heisi6RdctrwuyGm1JEMuacBxwtR9c