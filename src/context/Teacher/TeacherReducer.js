import {
  COURSE_SUCCESS,
  GET_COURSES,
  GET_ACTUAL_COURSE,
  GET_COURSE,
  GET_STUDENTS,
  GET_ALL_PRACTICES_SUCCESS,
  GET_ALL_PRACTICES_ERROR,
  GET_GROUPS_PRACTICE_1,
  GET_GROUPS_PRACTICE_2,
  GET_GROUPS_PRACTICE_3,
  LOADING,
  LOADING_SUCCESS,
  LOADING_ERROR,
} from "types/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case COURSE_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, payload],
      };

    case GET_COURSES:
      return {
        ...state,
        courses: payload,
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload,
      };

    case GET_ACTUAL_COURSE:
      return {
        ...state,
        course: state.courses.filter((course) => course.idCurso === payload),
      };

    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };

    case GET_ALL_PRACTICES_SUCCESS:
      return {
        ...state,
        practices: payload,
      };
    case GET_ALL_PRACTICES_ERROR:
      return {
        ...state,
        practices: [],
      };
    case GET_GROUPS_PRACTICE_1:
    case GET_GROUPS_PRACTICE_2:
    case GET_GROUPS_PRACTICE_3:
      return {
        ...state,
        groupspractices: payload,
      };

    case LOADING:
      return {
        ...state,
        isloading: true,
      };
    case LOADING_SUCCESS:
    case LOADING_ERROR:
      return {
        ...state,
        isloading: false,
      };

    default:
      return state;
  }
};
