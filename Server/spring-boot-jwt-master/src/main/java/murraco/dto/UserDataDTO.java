package murraco.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import murraco.model.AppUserRole;

import javax.persistence.Column;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDataDTO {

  @ApiModelProperty(position = 0)
  @Column(nullable = false)
  private String firstname;

  @ApiModelProperty(position = 1)
  @Column(nullable = false)
  private String lastname;

  @ApiModelProperty(position = 2)
  @Column(unique = true, nullable = false)
  private String email;

  @ApiModelProperty(position = 3)
  @Column(unique = true, nullable = false)
  //@Size(min = 10, message = "Minimum mobile number length: 10 characters")
  private double mobile;

  @ApiModelProperty(position = 4)
  @Column(nullable = false)
  private String address;

  @ApiModelProperty(position = 5)

  @Size(min = 4, max = 255, message = "Minimum username length: 4 characters")
  @Column(unique = true, nullable = false)
  private String username;

  @ApiModelProperty(position = 6)
  @Size(min = 8, message = "Minimum password length: 8 characters")
  private String password;


  @ApiModelProperty(position = 7)
  List<AppUserRole> appUserRoles;

}
