import "./FacturaCard.css"
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContentFactura from "./FacturaContent";

const FacturaCard = ({data}) =>{
    const [VerFacturasArray, setVerFacturasArray] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [selectedFactura, setSelectedFactura] = useState(null)


    const facturaClick = (factura) => {
        setShowModal(true)
        setSelectedFactura(factura)
    }


    const facturasArray = VerFacturasArray.map((factura) => (
        <div key={factura.id} className="factura_container" >
          
            <div className="factura_titulo" onClick={() => facturaClick(factura)}>{factura.nombre}</div>
            <div className="factura_fecha_inicio">{factura.fecha_registro}</div>
            <div className="factura_fecha_final">{factura.fecha_pago}</div>
            <div className="factura_precio">{factura.importe}€</div>
            <div className="factura_id">{factura.id}</div>
            
            
        </div>
    ))


    

    return(
        <div>
        <div className="facturas_grid_leyenda">
        
            <div className="factura_titulo_leyenda">Factura</div>
        <div className="factura_fecha_inicio_leyenda">Fecha inicio</div>
        <div className="factura_fecha_final_leyenda">Fecha Final</div>
        <div className="factura_precio_leyenda">Coste</div>   
        <div className="factura_id_leyenda">ID</div>
        </div>    
        {facturasArray}
         {showModal && createPortal(
        <ModalContentFactura onClose={() => setShowModal(false)} data={selectedFactura}/>,
        document.body
      )}
        </div>
        
    )
}

export default FacturaCard





