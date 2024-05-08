import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('./form');
  };

  return (
    <section className="website-inner2">
      <header className="contctanos-parent">
        <img
          className="contctanos-icon"
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
        <div className="ver">
          <Button
            className="ver-child"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: 18,
              borderColor: "#eaeaea",
              borderRadius: 107.06,
              "&:hover": { borderColor: "#eaeaea", background:"#F1F1F1"},
              width: 189.6,
            }}
            onClick={handleButtonClick}
          >
            Get projects
          </Button>
          <Button
            className="ver-item"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: 18,
              background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
              borderRadius: 107.06,
              "&:hover": {
                background: "linear-gradient(97.55deg, #4E4E4E, #4E4E4E)",
              },
              height: 77.2,
            }}
          >
            Onboard Talent
          </Button>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
