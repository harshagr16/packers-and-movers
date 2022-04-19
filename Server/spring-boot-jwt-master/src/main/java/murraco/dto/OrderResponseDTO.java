package murraco.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Column;

@Data

public class OrderResponseDTO {
    @ApiModelProperty(position = 0)
    //@Column(unique = true, nullable = false)
    private long orderid;

    @ApiModelProperty(position = 1)
    @Column(nullable = false)
    private String firstname;

    @ApiModelProperty(position = 2)
    private String lastname;

    @ApiModelProperty(position = 3)
    @Column(unique = true, nullable = false)
    private String email;

    @ApiModelProperty(position = 4)
    @Column(unique = true, nullable = false)
    //@Size(min = 10, message = "Minimum mobile number length: 10 characters")
    private double mobile;

    @ApiModelProperty(position = 5)
    @Column(nullable = false)
    private String address;

    @ApiModelProperty(position = 6)
    private String service_type;

    @ApiModelProperty(position = 7)
    @Column(nullable = false)
    private String source;

    @ApiModelProperty(position = 8)
    @Column(nullable = false)
    private String destination;

    @ApiModelProperty(position = 9)
    private String moving_date;
}
