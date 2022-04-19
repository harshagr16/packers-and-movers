package murraco.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data // Create getters and setters
@NoArgsConstructor
public class AppOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderid;

    @Column(nullable = false)
    private String firstname;

    @Column( nullable = false)
    private String lastname;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    //@Size(min = 10, message = "Minimum mobile number length: 10 characters")
    private double mobile;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String service_type;

    @Column( nullable = false)
    private String source;

    @Column( nullable = false)
    private String destination;
    //@DateTimeFormat(pattern = "yyyy-MM-dd")
    private String moving_date;


}
