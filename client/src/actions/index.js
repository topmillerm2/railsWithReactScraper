import axios from 'axios';
import { FORM_SUBMITTED } from './types.js';

export const submitForm = (el, url) => async dispatch => {
	const res = await axios.get(`/api/parse/?url=${url}&el=${el}`);
	console.log(res)
  dispatch({ type: FORM_SUBMITTED, payload: res.data });
};
