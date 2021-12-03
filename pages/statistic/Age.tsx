import React from "react";
import Chart from "../../components/Chart";
import Aside from "../../components/Aside";

function Age() {
    const Age = [
        {
            name: "0-10",
            Décès: 2,
        },
        {
            name: "11-20",

            Décès: 15,
        },
        {
            name: "21-30",

            Décès: 31,
        },
        {
            name: "31-40",

            Décès: 7,
        },
        {
            name: "41-50",
            Décès: 8,
        },
        {
            name: "51-60",
            Décès: 2,
        },
        {
            name: "61-70",
            Décès: 3,
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
                    Cette graphe permet la visualisation de nombre de décés en fonction d'age.
                </p>
                <Chart data={Age} width={700} />
            </div>
        </div>
    );
}

export default Age;
