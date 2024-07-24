export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const res = {
	status: 200,
	body: "Success",
      };
    resolve(res);
    } else {
      reject("The fake API is not working currently");
    }
  });
}
