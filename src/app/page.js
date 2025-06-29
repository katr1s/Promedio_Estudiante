"use client";

import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState(0);
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [mensaje, setMensaje] = useState("");

  function calcularPromedio() {
    if (r1 === "" || r2 === "" || r3 === "") {
      setResultado("Completa las 3 calificaciones.");
      return;
    }

    const promedio = r1 * 0.3 + r2 * 0.3 + r3 * 0.4;
    setResultado(`${promedio.toFixed(1)}`);
  }

  function manejarCambio(valor, setNota) {
    let num = parseFloat(valor);

    if (isNaN(num)) {
      num = "";
    } else if (num > 5) {
      num = 5;
      setMensaje("El valor fue ajustado a 5 (máximo permitido).");
    } else if (num < 0) {
      num = 0;
      setMensaje("El valor fue ajustado a 0 (mínimo permitido).");
    } else {
      setMensaje("");
    }

    setNota(num);
  }

  return (
    <>
      <div className="hero">
        <div className="calificaciones">
          <h1>Promedio estudiante</h1>
          <header>
            <div className="calificacion">
              <label htmlFor="R1">Calificación 1 (30%)</label>
              <input
                type="number"
                id="R1"
                value={r1}
                onChange={(e) => manejarCambio(e.target.value, setR1)}
              />
            </div>
            <div className="calificacion">
              <label htmlFor="R2">Calificación 2 (30%)</label>
              <input
                type="number"
                id="R2"
                value={r2}
                onChange={(e) => manejarCambio(e.target.value, setR2)}
              />
            </div>
            <div className="calificacion">
              <label htmlFor="R3">Calificación 3 (40%)</label>
              <input
                type="number"
                id="R3"
                value={r3}
                onChange={(e) => manejarCambio(e.target.value, setR3)}
              />
            </div>
          </header>

          <h3>{mensaje}</h3>

          <button onClick={calcularPromedio}>Calcular promedio</button>
        </div>
        <div className="resultado">
          <h2>El promedio del estudiante</h2>
          <h2>{resultado}</h2>
        </div>
      </div>
    </>
  );
}
