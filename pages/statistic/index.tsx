import React from "react";

import Aside from "../../components/Aside";
import Main from "../../components/Main";
import Chart from "../../components/Chart";

function statistic() {
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
                <Main />
            </div>
        </div>
    );
}

export default statistic;
