import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./cardDisplay.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CardDisplay = () =>  {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
 
    return (
      <div className="wrapper">
        <div className="title">
          <h1> These are your Cards </h1>
        </div>
        <div className="rowOne">
          {/* Grid One: Row One - Protein, Carbs, Veg*/}
          <Grid container justifyContent="center" item xs={12} spacing={1}>
            {/* Card One: Protein. */}
            <div className="cardHover">
              <Card
                variant="outlined"
                sx={{
                  height: 280,
                  width: 200
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="/icons/Card1.jpg"
                  alt="Card1"
                />
                <CardContent>
                  <div className="cardType">Protein</div>
                </CardContent>
              </Card>
            </div>
            {/* Card Two: Carbs. */}
            <div className="cardHover">
              <Card
                variant="outlined"
                sx={{
                  height: 280,
                  width: 200
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="/src/icons/Card2.jpg"
                  alt="Card2"
                />
                <CardContent>
                  <div className="cardType">Carbs</div>
                </CardContent>
              </Card>
            </div>
            {/* Card Three: Carbs. */}
            <div className="cardHover">
              <Card
                variant="outlined"
                sx={{
                  height: 280,
                  width: 200
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="/src/icons/Card3.jpg"
                  alt="Card3"
                />
                <CardContent>
                  <div className="cardType">Veg</div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </div>

        {/* Grid Two: Row Two - Seasoning & Wildcard */}
        <div className="rowTwo">
          <Grid container justifyContent="center" item xs={12} spacing={1}>
            <div className="cardHover">
              <Card
                variant="outlined"
                sx={{
                  height: 280,
                  width: 200
                }}
              >
                <CardContent>
                  <div className="cardType">Seasoning</div>
                </CardContent>
              </Card>
            </div>
            <div className="cardHover">
              <Card
                variant="outlined"
                sx={{
                  height: 280,
                  width: 200
                }}
              >
                <CardContent>
                  <div className="cardType">Wildcard</div>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <div className="submitButton">
            <Button variant="contained" size="large" color="success">
              Get Your Cards
            </Button>
            <button  onClick={handleLogout}>
					Logout
				</button>
          </div>
        </div>
      </div>
    );
  }

export default CardDisplay;
