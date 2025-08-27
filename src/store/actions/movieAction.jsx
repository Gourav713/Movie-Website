export { removemovie } from "../reducers/MovieSlice";
import axios from "../../utils/Axios";
import { loadmovie } from "../reducers/MovieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    const credits = await axios.get(`/movie/${id}/credits`);

    let theultimatedetail = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
      credits: credits.data,
    };

    dispatch(loadmovie(theultimatedetail));
  } catch (error) {
    console.log("error: ", error);
  }
};
