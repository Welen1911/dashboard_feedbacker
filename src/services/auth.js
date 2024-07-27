export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post("/auth/login", {
      email,
      password,
    });

    console.log(response);

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }
    console.log("Com dados!");

    return {
      data: response.data,
      status: response.status,
      errors
    }
  },
  createUser: async ({ name, email, password }) => {
    const response = await httpClient.post("/auth/register", {
      name,
      email,
      password,
    });

    console.log(response);

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }
    console.log("Com dados!");

    return {
      data: response.data,
      status: response.status,
      errors
    }
  },
});
