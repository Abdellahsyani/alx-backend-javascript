export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
      resolve({
	firsName: firstName,
	lastName: lastName,
      });
  });
}
