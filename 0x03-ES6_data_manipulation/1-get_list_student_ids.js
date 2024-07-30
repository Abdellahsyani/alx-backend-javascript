export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  const student = ids.map((ides) => ides.id);
  return student;
}
