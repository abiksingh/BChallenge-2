import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_LAUNCH_REQUEST,
  GET_LAUNCH_SUCCESS,
  GET_LAUNCH_FAIL,
  GET_LAUNCH_BY_ID_REQUEST,
  GET_LAUNCH_BY_ID_SUCCESS,
  GET_LAUNCH_BY_ID_FAIL,
} from '../constants/launchConstants';

export const getAllLaunches = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_LAUNCH_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.spacexdata.com/v4/launches/past`
    );

    dispatch({
      type: GET_LAUNCH_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_LAUNCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLaunchById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_LAUNCH_BY_ID_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.spacexdata.com/v4/launches/${id}`
    );

    dispatch({
      type: GET_LAUNCH_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_LAUNCH_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
