export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, students) => sum + students.id, 0);
  }
  return [];
}
