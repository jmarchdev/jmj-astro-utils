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
            <div className="factura_botones">
            <div className="factura_borrar">X</div>
            <div className="factura_info">?</div>
            </div>
        </div>
    ))


    

    return(
        <div>{facturasArray}
         {showModal && createPortal(
        <ModalContentFactura onClose={() => setShowModal(false)} data={selectedFactura}/>,
        document.body
      )}
        </div>
        
    )
}

export default FacturaCard





