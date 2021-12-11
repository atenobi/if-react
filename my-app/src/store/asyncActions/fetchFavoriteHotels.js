// action creator
import { addFavoriteHotelsAction } from '../hotelsReducer';

// url
import baseURL from '../../constants/baseURL';

export const fetchFavoriteHotels = () => (dispatch) => {
  fetch(`${baseURL}hotels/popular`)
    .then((res) => res.json())
    .then(
      (json) => {
        dispatch(addFavoriteHotelsAction(json));
      },
      (err) => {
        console.log(err.text);
      },
    );
};
