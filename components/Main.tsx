import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "prenom", headerName: "prenom", width: 130 },
    { field: "nom", headerName: "nom", width: 130 },
    { field: "genre", headerName: "genre", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "nom et prenom",
        headerName: "nom et prenom",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: any) =>
            `${params.getValue(params.id, "prenom") || ""} ${
                params.getValue(params.id, "nom") || ""
            }`,
    },
];

const rows = [
    { id: 1, nom: "Snow", prenom: "Jon", age: 35, genre: "Femme" },
    { id: 2, nom: "Lannister", prenom: "Cersei", age: 42, genre: "Homme" },
    { id: 3, nom: "Lannister", prenom: "Jaime", age: 45, genre: "Femme" },
    { id: 4, nom: "Stark", prenom: "Arya", age: 16, genre: "Homme" },
    { id: 5, nom: "Targaryen", prenom: "Daenerys", age: 54, genre: "Femme" },
    { id: 6, nom: "Melisandre", prenom: "Aziz", age: 150, genre: "Homme" },
    { id: 7, nom: "Clifford", prenom: "Ferrara", age: 44, genre: "Homme" },
    { id: 8, nom: "Frances", prenom: "Rossini", age: 36, genre: "Homme" },
    { id: 9, nom: "Roxie", prenom: "Harvey", age: 65, genre: "Homme" },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: "80%", marginTop: "50px" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
