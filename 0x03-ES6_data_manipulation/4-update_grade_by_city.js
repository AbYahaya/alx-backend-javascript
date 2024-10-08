export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)  // Filter students by location (city)
    .map(student => {
      const studentGrade = newGrades.find(grade => grade.studentId === student.id);  // Find the grade for the student
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',  // If grade found, use it; otherwise, 'N/A'
      };
    });
}
