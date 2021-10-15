import { AnyAction } from 'redux';
import {
  GET_LAUNCH_REQUEST,
  GET_LAUNCH_SUCCESS,
  GET_LAUNCH_FAIL,
  GET_LAUNCH_BY_ID_REQUEST,
  GET_LAUNCH_BY_ID_SUCCESS,
  GET_LAUNCH_BY_ID_FAIL,
} from '../constants/launchConstants';

export const getAllSpaceLaunchesReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_LAUNCH_REQUEST:
      return {
        loading: true,
      };
    case GET_LAUNCH_SUCCESS:
      return {
        loading: false,
        success: true,
        allLaunch: action.payload,
      };

    case GET_LAUNCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getSpaceLaunchByIdReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_LAUNCH_BY_ID_REQUEST:
      return {
        loading: true,
      };

    case GET_LAUNCH_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        launchById: action.payload,
      };

    case GET_LAUNCH_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
