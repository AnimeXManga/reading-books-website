const url = "http://127.0.0.1:8000";

export default async function FetchApi(extend, method, data) {
  const fullUrl = `${url}/${extend}`;
  
  const option = {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  console.log(!data);
  if (!data) {
    delete option.body;
  }
  console.log(option, fullUrl);
  const response = await fetch(fullUrl, option);
  return response.json();
}
