import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Site } from "../api/site";

function AddSiteModal({ onClose, setSites }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://");
  const [owner, setOwner] = useState(undefined);

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Nova URL</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          label="Nome"
          required
          margin="dense"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="URL"
          placeholder="https://"
          defaultValue="https://"
          required
          margin="dense"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Dono"
          margin="dense"
          fullWidth
          value={owner || ""}
          onChange={(e) => setOwner(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            Site.add({ name, url, owner })
              .then(({ data }) => {
                setSites(data);
                onClose();
              })
              .catch((error) => {
                console.error({ error });
                alert(error.response?.data?.message || "Ocorreu um erro");
              });
          }}
        >
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddSiteModal;
