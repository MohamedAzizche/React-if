import React from "react";
import Chart from "../../components/Chart";
import Aside from "../../components/Aside";

function Age() {
    const Time = [
        {
            name: "Janvier",
            Décès: 15,
        },
        {
            name: "Fevrier",

            Décès: 6,
        },
        {
            name: "Mars",

            Décès: 8,
        },
        {
            name: "Avril",

            Décès: 3,
        },
        {
            name: "Mai",
            Décès: 20,
        },
        {
            name: "Juin",
            Décès: 1,
        },
        {
            name: "Juillet",
            Décès: 10,
        },
        {
            name: "Aout",
            Décès: 7,
        },
        {
            name: "Septembre",
            Décès: 8,
        },
        {
            name: "Octobre",
            Décès: 3,
        },
        {
            name: "Novembre",
            Décès: 6,
        },
        {
            name: "Decembre",
            Décès: 11,
        },
    ];
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <Aside />
            <div
                style={{
                    width: "100%",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "100px",
                    marginBottom: "100px",
                }}
            >
                <p style={{ fontSize: "20px", maxWidth: "600px", marginTop: "50px" }}>
                    Cette graphe permet la visualisation de nombre de décés en fonction du date.
                </p>
                <Chart data={Time} width={1000} />
            </div>
        </div>
    );
}

export default Age;
