import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
import { Badge } from "react-bootstrap";

const EmpleadoRow = (props) => {
   console.log(props.empleados[0].fullName)
  return (
    <div className='d-flex'>
      <div>
        <EmpleadoAvatar empleados={props.empleados} index={props.index}></EmpleadoAvatar>
      </div>
      <div>
        <h5 className='text-start'>{props.empleados[props.index].fullName}</h5>
        <div className='d-flex'>
          <p>{props.empleados[props.index].title}</p>
          <Badge bg="primary" className='align-self-start ms-3 mt-1'>{props.empleados[props.index].department}</Badge>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
