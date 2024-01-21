import tempImg from "../image/tempSemla.png";
export const MainCard = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div
            className="col"
            style={{
              border: "4px solid white",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px grey",
            }}
          >
            <img src={tempImg} className="card-img-top" alt="..." />
          </div>
          <div
            className="col"
            style={{
              border: "4px solid white",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px grey",
            }}
          >
            <img src={tempImg} className="card-img-top" alt="..." />
          </div>
          <div
            className="col"
            style={{
              border: "4px solid white",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px grey",
            }}
          >
            <img src={tempImg} className="card-img-top" alt="..." />
          </div>
          <div
            className="col"
            style={{
              border: "4px solid white",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px grey",
            }}
          >
            <img src={tempImg} className="card-img-top" alt="..." />
          </div>
          <div
            className="col"
            style={{
              border: "4px solid white",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px grey",
            }}
          >
            <img src={tempImg} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
