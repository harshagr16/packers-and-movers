package murraco.repository;


import murraco.model.AppOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface OrderRepository extends JpaRepository<AppOrder, Integer> {


    AppOrder findByOrderid(long orderid);

    @Transactional
        //used ROLLBACK TRANSACTION to erase all data modifications made from the start of the transaction or to a savepoint.
    void deleteByOrderid(long orderid);
}
