import React from "react";
import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
const EmpleadoList = (props) => {
  return (
    <ListGroup className='vh-50'>
      <ListGroup.Item>
        {props.empleados.map((empleado, index) => (
          <EmpleadoRow
            empleados={props.empleados}
            index={index}
            empleado={empleado}
          ></EmpleadoRow>
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default EmpleadoList;
