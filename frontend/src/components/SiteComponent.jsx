import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Site } from "../api/site";
import DeleteIcon from "@mui/icons-material/Delete";

function SiteComponent({ name, url, owner = "", id, setSites }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        padding: 14,
        backgroundColor: "#32a4a8",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", flexFlow: "column", gap: "4px" }}>
        <Typography>
          <b>Nome:</b>
          {` ${name}`}
        </Typography>
        <Typography>
          <b>URL:</b>
          {` ${url}`}
        </Typography>
      </div>
      <Typography style={{ flex: 1 }}>
        {owner ? "Dono: " + owner : ""}
      </Typography>
      <IconButton
        onClick={() => {
          if (window.confirm("Deseja excluir o site " + name + "?")) {
            Site.delete(id)
              .then(({ data }) => setSites(data))
              .catch((er) => {
                alert(er.response?.data?.message || "Ocorreu um erro");
              });
          }
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default SiteComponent;
