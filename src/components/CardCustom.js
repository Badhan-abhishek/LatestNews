import "../static/App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { useState } from "react";


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 350
  },
  media: {
    height: 140,
  },
});


export function CardCustom({ article }) {
  const classes = useStyles();
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  var img = article.media[0]["media-metadata"][1].url
  const jumper = () => {
    window.open(article.url)
  }
  return (
    <div className="card-container">
     <Card className={classes.root}>
        <div className="image-container">
          <CardMedia className={classes.media} image={img} />
          <div className="overlay">
            <Button onClick={jumper} variant="contained" color="primary">
              Read more
            </Button>
          </div>
        </div>
        <CardContent className="text-container">
          <h3 className="title">
            {article.title}
          </h3>
          <p>{article.published_date}</p>
          <p>{article.source}</p>
        </CardContent>
        <div className="action-center">
          <span className="left-text">{article.section}</span>
          <span className="icon">
            <FavoriteOutlinedIcon onClick={handleClick} className={active ? "active-icon" : "icon"}  />
          </span>
        </div>
      </Card>
      </div>
  );
}

