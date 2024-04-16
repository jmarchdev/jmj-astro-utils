import React, { useState } from "react";
import "./ProyectoCard.css"

const ProyectoCard = ({data}) => {
    const [VerProyectosArray, setVerProyectosArray] = useState(data);
    const [isListMode, setIsListMode] = useState(false);

    const toggleViewMode = () => {
        setIsListMode(!isListMode);
    };

    const proyectosArray = VerProyectosArray.map((proyecto) => (
        <div key={proyecto.id} className="proyectos_item">
            <div>{proyecto.nombre}</div>
        </div>
    ));

    return (
        <div className="proyectos_container">
            <div className="proyectos_viewmodel" onClick={toggleViewMode}><img src="public\aplicaciones.svg" className="proyectos_changer"/> Cambiar vista </div>
            <div className={`proyectos_array ${isListMode ? "proyectos_array_list" : "proyectos_array_grid"}`}> 
                {proyectosArray}
            </div>
        </div>
    );
}

export default ProyectoCard;
