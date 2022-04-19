package murraco.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import murraco.dto.OrderDataDTO;
import murraco.dto.OrderResponseDTO;
import murraco.model.AppOrder;
import murraco.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/orders")
@Api(tags = "orders")
@RequiredArgsConstructor

public class OrderController {
    private final OrderService orderService;
    private final ModelMapper modelMapper;

//With @ApiOperation you can specify the return type of the REST method using response.
//With @ApiResponse you can send back other information like HTTP code, user defined message and other headers if any you want to return
        @PostMapping("/addorder")
        @ApiOperation(value = "${OrderController.addorder}")
        @ApiResponses(value = {//
                @ApiResponse(code = 400, message = "Something went wrong"), //
                @ApiResponse(code = 403, message = "Access denied"), //
                @ApiResponse(code = 422, message = "OrderId is already in use")})
        public String addorder(@ApiParam("addorder Order") @RequestBody OrderDataDTO order) {
            System.out.println("addorder api");
            return orderService.addorder(modelMapper.map(order, AppOrder.class));
        }


        @DeleteMapping(value = "/{orderid}")
        //@PreAuthorize("hasRole('ROLE_ADMIN')")
        @ApiOperation(value = "${OrderController.delete}", authorizations = { @Authorization(value="apiKey") })
        @ApiResponses(value = {//
                @ApiResponse(code = 400, message = "Something went wrong"), //
                @ApiResponse(code = 403, message = "Access denied"), //
                @ApiResponse(code = 404, message = "The order doesn't exist")})

        public long delete(@ApiParam("Orderid") @PathVariable long orderid) {
            orderService.delete(orderid);
            return orderid;
        }

        @GetMapping(value = "/{orderid}")
        //@PreAuthorize("hasRole('ROLE_ADMIN')")
        @ApiOperation(value = "${OrderController.search}", response = OrderResponseDTO.class) //, authorizations = { @Authorization(value="apiKey") }
        @ApiResponses(value = {//
                @ApiResponse(code = 400, message = "Something went wrong"), //
                @ApiResponse(code = 403, message = "Access denied"), //
                @ApiResponse(code = 404, message = "The order doesn't exist")})

        public OrderResponseDTO search(@ApiParam("Orderid") @PathVariable long orderid) {
            return modelMapper.map(orderService.search(orderid), OrderResponseDTO.class);
        }
}
