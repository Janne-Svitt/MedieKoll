import tempSemla from "./image/tempSemla.png";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div
          className="card"
          style={{
            width: "18rem",
            border: "4px solid grey",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <img
            src={tempSemla}
            className="card-img-top"
            alt="..."
            style={{ width: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "18rem",
            border: "4px solid grey",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <img
            src={tempSemla}
            className="card-img-top"
            alt="..."
            style={{ width: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
