import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Site } from "./api/site";
import "./App.css";
import SiteComponent from "./components/SiteComponent";
import AddSiteModal from "./modals/AddSiteModal";
function App() {
  const [sites, setSites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    Site.find().then(({ data }) => setSites(data));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "8px",
          height: "calc(100vh - 24px)",
          backgroundColor: "#3d3d3d",
          overflow: "auto",
          padding: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            gap: "8px",
            flex: 1,
            overflow: "auto",
          }}
        >
          {sites.map((site) => (
            <SiteComponent
              key={site._id}
              name={site.name}
              id={site._id}
              url={site.url}
              owner={site.owner}
              setSites={setSites}
            />
          ))}
        </div>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ marginBottom: 16 }}
        >
          Novo site
        </Button>
      </div>
      {modalOpen && (
        <AddSiteModal setSites={setSites} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default App;
