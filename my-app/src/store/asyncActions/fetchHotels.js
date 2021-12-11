// action creator
import { addHotelsAction } from '../hotelsReducer';

export const fetchHotels = (url) => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then(
      (json) => {
        dispatch(addHotelsAction(json));
      },
      (err) => {
        console.log(err.text);
      },
    );
};
