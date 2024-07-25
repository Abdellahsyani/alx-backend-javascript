import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => (
      val.map((v) => ({
	status: v.status,
	value: v.status === 'fulfilled' ? v.value : String(v.reason),
      }))
    ));
}
