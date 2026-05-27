import Swal from "sweetalert2"
import "./Alerta.css"

//destructuring do JavaScript

export const Alerta = ({
              title,
              text,
              icon,
              showCancelButton = null,
              confirmButtonColor ="#3085d6",
              cancelButtonColor = "#d33",
              confirmButtonText = null,
              cancelButtonText = null
              

}) => {
            return Swal.fire({  
              title: title,
              text: text,
              icon: icon,
              showCancelButton: showCancelButton,
              confirmButtonColor: confirmButtonColor,
              cancelButtonColor: cancelButtonColor,
              confirmButtonText: confirmButtonText,
              cancelButtonText: cancelButtonText
              });     
    
}