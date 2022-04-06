import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CasesCard = ({ title, data, img }) => {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345, margin: 2.5 }}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {data}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CasesCard;
