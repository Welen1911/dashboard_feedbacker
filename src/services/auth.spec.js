import AuthService from "./auth";
import mockAxios from "axios";

jest.mock("axios");

describe("authService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a token when user login", async () => {
    const token = "123.123.123";
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } });
    });
    const response = await AuthService(mockAxios).login({
      email: "welen@teste.com",
      password: "1234",
    });
    expect(response.data).toHaveProperty("token");
    expect(response).toMatchSnapshot();
  });

  it("should return an user when user register", async () => {
    const user = {
      name: "Welen",
      password: "1234",
      email: "welen@teste.com",
    };

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({
        data: user,
      });
    });

    const response = await AuthService(mockAxios).createUser(user);

    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("email");
    expect(response.data).toHaveProperty("password");
    expect(response.data).toMatchSnapshot();
  });

  it("should throw an error when not found", async () => {
    const errors = { status: 404, statusText: "Not found" };

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({
        request: errors,
      });
    });

    const response = await AuthService(mockAxios).login({
      email: "welen@teste.com",
      password: "1234",
    });

    expect(response.errors).toHaveProperty("status");
    expect(response.errors).toHaveProperty("statusText");
  });
});
