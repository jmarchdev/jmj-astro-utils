import React from "react";
import "./FacturaCard.css";

export default function ModalContentFactura({ onClose, data }) {

    

  return (
    <div className="modal-overlay">
      <div className="modal">
      <div class="mx-auto text-center mb-6 lg:mb-10">
      <h2
        class="mb-4 text-xl tracking-tight font-mono text-gray-600"
      >
        {data.nombre}
      </h2>
    </div>
        
        <button onClick={onClose} className="btnCerrarModal">Cerrar</button>
      </div>
      <div className="modal2">
      <div class="mx-auto text-center mb-6 lg:mb-10">
      <h2
        class="mb-4 text-xl tracking-tight font-mono text-gray-600"
      >
        Proyectos
      </h2>
    </div>
        
       
      </div>
    </div>
  );
}
