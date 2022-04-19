package murraco.service;

import lombok.RequiredArgsConstructor;
import murraco.exception.CustomException;
import murraco.model.AppOrder;
import murraco.repository.OrderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {


    private final OrderRepository orderRepository;
    //private final JwtTokenProvider jwtTokenProvider;

    public String addorder(AppOrder appOrder) {
        try {
            orderRepository.save(appOrder);
            return "Order placed successfully! Order id is:" + appOrder.getOrderid();
        }
        catch(Exception e){
            throw new CustomException("Failed to generate Orderid.", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }


    public Object search(long orderid) {
        AppOrder appOrder = orderRepository.findByOrderid(orderid);
        //with help of class we can only call static methods.
        //need object e.g. (orderRepository) to call non-static methods e.g.(findByOrderid(orderid)).

        if (appOrder == null) {
            throw new CustomException("The order doesn't exist", HttpStatus.NOT_FOUND);
        }
        return appOrder;
    }

    public void delete(long orderid) {
        orderRepository.deleteByOrderid(orderid);
    }

}
