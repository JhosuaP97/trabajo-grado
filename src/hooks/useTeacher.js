import { useContext, useEffect } from "react";
import TeacherContext from "context/Teacher/TeacherContext";

const useTeacher = () => {
  const teacherContext = useContext(TeacherContext);
  const { participants, getCourseStudents } = teacherContext;

  useEffect(() => {
    if (participants.length === 0) {
      getCourseStudents(1);
    }
  }, [participants, getCourseStudents]);

  return {
    participants,
  };
};

export default useTeacher;
