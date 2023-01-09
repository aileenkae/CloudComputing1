import React from "react";
import { useParams } from "react-router-dom";

export function FormEdit(props) {
    const params = useParams();

    return (
        <h1>Edit form {params.id}</h1>
    );
}