import React from "react";
import Chart from "../../components/Chart";
import Aside from "../../components/Aside";

function Age() {
    const Gender = [
        {
            name: "Male",
            Décès: 50,
        },
        {
            name: "Female",

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
                    Cette graphe permet la visualisation de nombre de décés en fonction du sexe.
                </p>
                <Chart data={Gender} width={300} />
            </div>
        </div>
    );
}

export default Age;
