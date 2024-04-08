export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post("/auth/login", {
      email,
      password,
    });

    console.log(response);

    let errors = null;

    // if (!reponse.data) {
    //   errors = {
    //     status: reponse.request.status,
    //     statusText: reponse.request.statusText,
    //   };
    // }
    console.log("Com dados!");

    return response;
  },
});
