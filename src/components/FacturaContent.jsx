import React from "react";
import "./FacturaCard.css";

export default function ModalContentFactura({ onClose, data }) {

    

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="mx-auto text-center mb-6 lg:mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {data.nombre}
          </h2>
          <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-sm text-gray-600">{data.descripcion}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Fecha Registro: {data.fecha_registro}</p>
            <p className="text-sm text-gray-600">{data.pagada ? "Fecha Pago: "+data.fecha_pago:""}</p>
          </div>
        </div>
        <button onClick={onClose} className="btnCerrarModal">
          Cerrar
        </button>
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
