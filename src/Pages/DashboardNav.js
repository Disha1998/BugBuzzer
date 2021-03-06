import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import QandAdetail from "./Q&Adetail";
import BugLogo from "./BugBuzzer-Logo-Web.png";

const DashboardNav = () => {
  return (
    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar>
        <Typography flexGrow={1}>
          <Link to="/dashboard">
            {/* <Typography flexGrow={1}> */}
            <img src={BugLogo} alt="logo" />
            {/* </Typography> */}
          </Link>
        </Typography>

        <Box m={1} p={2}>
          {/* <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Report Bug
          </Button> */}

          <Link to="/dashboard/bugcampaigns" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              size="medium"
              variant="text"
            >
              Bounty Campaign
            </Button>
          </Link>

          <Button
            href="/dashboard/leaderboard"
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Leader Board{" "}
          </Button>
          <Link
            to="/dashboard/Question-form"
            style={{ textDecoration: "none" }}
          >
            <Link to="/dashboard/QueAns" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                size="medium"
                variant="text"
              >
                Q&A
              </Button>
            </Link>
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#D82148",
                textDecoration: "none",
                textTransform: "initial",
                border: "2px solid #D82148",
                marginRight: "18px",
                fontWeight: "bold",
              }}
              sx={{ borderRadius: 2 }}
            >
              Ask a Question
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNav;
