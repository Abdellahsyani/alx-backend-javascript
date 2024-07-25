export default function loadBalancer(chinaDwnload, USDownload) {
  return Promise.race([chinaDwnload, USDownload])
    .then((value) => {
      return value;
    });
}
