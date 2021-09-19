import React, { useEffect } from "react";
import Navbar from "Components/Navbar";
import TeacherCourses from "Components/TeacherCourses";
import useAuth from "hooks/useAuth";

const CoursesPageTeacher = () => {
  // Extraer la información de autenticación
  const { userAuthenticate } = useAuth();

  useEffect(() => {
    userAuthenticate();
  }, []);

  return (
    <>
      <Navbar />
      <TeacherCourses />
    </>
  );
};

export default CoursesPageTeacher;