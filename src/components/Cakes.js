import { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";

const Cakes = () => {
  const [cakeType, setCakeType] = useState("white");
  const cakes = [
    {
      title: '8" Round',
      serving: "Serves 8 - 16",
      whitePrice: "25.50",
      chocPrice: "26.50",
      carrotPrice: "27.50",
    },
    {
      title: "1/4 Sheet",
      serving: "Serves 12 - 20",
      whitePrice: "28.50",
      chocPrice: "29.50",
      carrotPrice: "30.50",
    },
    {
      title: "1/2 Sheet",
      serving: "Serves 18 - 40",
      whitePrice: "52.50",
      chocPrice: "54.50",
      carrotPrice: "56.50",
    },
    {
      title: "Full Sheet",
      serving: "Serves 48-96",
      whitePrice: "91.50",
      chocPrice: "94.50",
      carrotPrice: "99.50",
    },
  ];

  // Changes the cake price based on the selected cake type
  function selectCakePrice(cake) {
    switch (cakeType) {
      case "white":
        return cake.whitePrice;
      case "chocolate":
        return cake.chocPrice;
      case "carrot":
        return cake.carrotPrice;
    }
  }

  // Updates the cake card and button colors based on type of Cake
  let labelStyle,
    priceContainerStyle,
    whiteButtonStyle,
    chocButtonStyle,
    carrotButtonStyle;
  if (cakeType == "carrot") {
    labelStyle = {
      background: "#ED7014",
    };
    priceContainerStyle = {
      background: "rgba(255,165,0, 0.2)",
    };
    carrotButtonStyle = {
      background: "rgba(255,165,0, 0.2)",
    };
  } else if (cakeType == "chocolate") {
    labelStyle = {
      background: "#65350F",
    };
    priceContainerStyle = {
      background: "rgba(165, 42, 42, 0.2)",
    };
    chocButtonStyle = {
      background: "rgba(165, 42, 42, 0.2)",
    };
  } else {
    labelStyle = {
      background: "#565656",
    };
    priceContainerStyle = {
      background: "rgba(255,253,208, 0.8)",
    };
    whiteButtonStyle = {
      background: "rgba(255,253,208, 0.8)",
    };
  }

  const textStyle = {
    fontSize: "1.2em",
    fontStyle: "italic",
  };

  return (
    <>
      <div className="products-cat-title">
        <h2>Cakes</h2>
      </div>
      <div className="decorated-cakes-container">
        <h3>Decorated Cakes ({cakeType})</h3>
        <p style={textStyle}>
          Select white, chocolate, or carrot to see pricing for standard cake
          sizes. Custom decoration is available at an additional charge. Call or
          email for a custom decoration quote.
        </p>
        <ButtonGroup size="large">
          <Button style={whiteButtonStyle} onClick={() => setCakeType("white")}>
            White
          </Button>
          <Button
            style={chocButtonStyle}
            onClick={() => setCakeType("chocolate")}
          >
            Chocolate
          </Button>
          <Button
            style={carrotButtonStyle}
            onClick={() => setCakeType("carrot")}
          >
            Carrot
          </Button>
        </ButtonGroup>
        <div className="dec-cakes-prices-container">
          {cakes.map((cake) => (
            <div className="decorated-cake-card">
              <div className="cake-card-label" style={labelStyle}>
                <h5>{cake.title}</h5>
                <span>{cake.serving}</span>
              </div>
              <div className="cake-price" style={priceContainerStyle}>
                <span className="currency">$</span>
                <span>{selectCakePrice(cake)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="standard-cakes-container">
        <h3>8" Two Layer Cakes</h3>
        <p style={textStyle}>
          Cake photos coming soon! In the meantime, please see our{" "}
          <Link to="/gallery">gallery</Link> for custom dessert photos
        </p>
        <div className="standard-cakes-list">
          <ul>
            <li>
              <strong>Vanilla</strong>
              <span> - $19.95</span>
            </li>
            <li>
              <strong>Carrot</strong>
              <span> - $21.95</span>
            </li>
            <li>
              <strong>Cherry</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Chocolate</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Checkerboard</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Coconut</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Lemon</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Marble</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Orange</strong>
              <span> - $21.95</span>
            </li>
            <li>
              <strong>Yellow</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Strawberry</strong>
              <span> - $20.95</span>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Black Forest</strong>
              <span> - $24.95</span>
            </li>
            <li>
              <strong>German Chocolate</strong>
              <span> - $22.95</span>
            </li>
            <li>
              <strong>Italian Cream</strong>
              <span> - $22.95</span>
            </li>
            <li>
              <strong>Chocolate Fudge</strong>
              <span> - $22.95</span>
            </li>
            <li>
              <strong>Chocolate Mousse</strong>
              <span> - $24.95</span>
            </li>
            <li>
              <strong>Chocolate Rasberry</strong>
              <span> - $22.95</span>
            </li>
            <li>
              <strong>Pina Colada</strong>
              <span> - $20.95</span>
            </li>
            <li>
              <strong>Red Velvet</strong>
              <span> - $22.95</span>
            </li>
            <li>
              <strong>Strawberry Shortcake</strong>
              <span> - $24.95</span>
            </li>
            <li>
              <strong>Tiramisu</strong>
              <span> - $26.95</span>
            </li>
            <li>
              <strong>Tres Leches</strong>
              <span> - $26.95</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cakes;
