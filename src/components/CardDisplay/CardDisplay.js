import React from "react";
import "./CardDisplay.css";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import RandomCardGenerator from "../RandomCardGenerator/CardGenerator.js";
import {
  ProteinPacks,
  CarbPacks,
  VegPacks,
} from "../RandomCardGenerator/CardGenerator.js";

const CardDisplay = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid rgba(255, 208, 0, 0.8)",
    boxShadow: 20,
    p: 4,
  };

  return (
    <div class="wrapper">
      <div class="title">
        <h1> Make your Meal! </h1>
        <Button onClick={handleOpen} variant="contained">
          My Ingredients
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>

      <div class="rowOne">
        {/* Grid One: Row One - Protein, Carbs, Veg*/}
        <Grid container justifyContent="center" item xs={12} spacing={1}>
          {/* Card One: Protein. */}
          <div class="cardHover">
            <Card
              variant="outlined"
              sx={{
                height: 280,
                width: 200,
              }}
              onClick={handleOpen}
            >
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Card Information:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Power:
                    <br />
                    Duration:
                  </Typography>
                </Box>
              </Modal>

              <CardMedia
                component="img"
                style={{ height: 275, width: 200, paddingTop: "0%" }}
                image={require("./icons/Card1.jpg")}
                alt="Card1"
              />

              <input
                class="inputButton"
                type="text"
                id="randomProtein"
                name="randomProtein"
                readonly="readonly"
              />

              <CardContent>
                <div class="cardType"></div>
              </CardContent>
            </Card>
          </div>

          {/* Card Two: Carbs. */}
          <div class="cardHover">
            <Card
              variant="outlined"
              sx={{
                height: 280,
                width: 200,
              }}
              onClick={handleOpen}
            >
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Card Information:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Power:
                    <br />
                    Duration:
                  </Typography>
                </Box>
              </Modal>

              <CardMedia
                component="img"
                style={{ height: 275, width: 200, paddingTop: "0%" }}
                image={require("./icons/Card2.jpg")}
                alt="Card2"
              />

              <input
                class="inputButton"
                type="text"
                id="randomCarb"
                name="randomCarb"
                readonly="readonly"
              />

              <CardContent>
                <div class="cardType"></div>
              </CardContent>
            </Card>
          </div>

          {/* Card Three: Carbs. */}
          <div class="cardHover">
            <Card
              variant="outlined"
              sx={{
                height: 280,
                width: 200,
              }}
              onClick={handleOpen}
            >
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Card Information:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Power:
                    <br />
                    Duration:
                  </Typography>
                </Box>
              </Modal>

              <CardMedia
                component="img"
                style={{ height: 275, width: 200, paddingTop: "0%" }}
                image={require("./icons/Card3.jpg")}
                alt="Card3"
              />

              <input
                class="inputButton"
                type="text"
                id="randomVeg"
                name="randomVeg"
                readonly="readonly"
              />
              <CardContent>
                <div class="cardType"></div>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </div>
      <br />

      {/* Grid Two: Row Two - Seasoning & Wildcard */}
      <div class="rowTwo">
        <Grid container justifyContent="center" item xs={12} spacing={1}>
          <div class="cardHover">
            <Card
              variant="outlined"
              sx={{
                height: 280,
                width: 200,
              }}
              onClick={handleOpen}
            >
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Card Information:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Power:
                    <br />
                    Duration:
                  </Typography>
                </Box>
              </Modal>

              <CardMedia
                component="img"
                style={{ height: 275, width: 200, paddingTop: "0%" }}
                image={require("./icons/Card4.jpg")}
                alt="Card1"
              />

              <input
                class="inputButton"
                type="text"
                id="randomProtein"
                name="randomProtein"
                readonly="readonly"
              />

              <CardContent>
                <div class="cardType"></div>
              </CardContent>
            </Card>
          </div>
          <div class="cardHover">
            <Card
              variant="outlined"
              sx={{
                height: 280,
                width: 200,
              }}
              onClick={handleOpen}
            >
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Card Information:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Power:
                    <br />
                    Duration:
                  </Typography>
                </Box>
              </Modal>

              <CardMedia
                component="img"
                style={{ height: 275, width: 200, paddingTop: "0%" }}
                image={require("./icons/Card5.jpg")}
                alt="Card1"
              />

              <input
                class="inputButton"
                type="text"
                id="randomProtein"
                name="randomProtein"
                readonly="readonly"
              />

              <CardContent>
                <div class="cardType"></div>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <br></br>
        <div class="submitButton">
          <Button
            variant="contained"
            onClick={RandomCardGenerator}
            size="large"
            color="success"
          >
            Protein Packs: {ProteinPacks}
          </Button>
          <Button
            variant="contained"
            onClick={RandomCardGenerator}
            size="large"
            color="success"
          >
            Carb Packs : {CarbPacks}
          </Button>
          <Button
            variant="contained"
            onClick={RandomCardGenerator}
            size="large"
            color="success"
          >
            Veg Packs : {VegPacks}
          </Button>
        </div>
        <div class="logoutButton">
          <Button variant="contained" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
