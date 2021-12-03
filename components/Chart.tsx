import { maxWidth } from "@mui/system";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function App({ data, width }) {
    return (
        <BarChart
            width={width}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            barSize={20}
        >
            <XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray='3 3' />
            <Bar dataKey='Décès' fill='#011E3B' background={{ fill: "#eee" }} />
        </BarChart>
    );
}
