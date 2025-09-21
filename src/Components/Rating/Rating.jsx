import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faSolidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating({rating}) {

  function getStarIcon(position) {
    if (rating>=position){
        return faSolidStar
    } else if (rating>=position-0.5){
        return faStarHalfAlt
    } else {
        return faRegularStar
    }


  }
  return (
    <div className="stars text-yellow-500 flex gap-1">
      {[1, 2, 3, 4, 5].map((position) => {
        return <  FontAwesomeIcon key={position} icon={getStarIcon(position)} />;
      })}


    </div>
  );
}
