import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import "./Rating.scss";

function Rating({ rating, maxRating, size }) {
  return (
    <div>
      {new Array(maxRating).fill(0).map(function (item, index) {
        const isActive = rating >= index + 1;
        let classN = isActive ? "rating__star--active" : "rating__star";
        return (
          <Icon className={classN} path={mdiStar} size={size} key={index} />
        );
      })}
    </div>
  );
}

export default Rating;
