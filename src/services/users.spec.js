import mockAxios from "axios";
import UsersService from "./users";

jest.mock("axios");

describe("UsersServices", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should take user in session", async () => {
    const user = {
      id: "9be4ea3f-827b-4f61-92bb-a9e85fe602db",
      name: "admin",
      email: "admin@teste.com",
      email_verified_at: null,
      created_at: "2024-04-25T19:54:08.000000Z",
      updated_at: "2024-04-25T19:54:08.000000Z",
      apikey: {
        id: "9be541de-5967-47d2-bfe5-bf2d0cd1e43b",
        created_at: "2024-04-25T23:59:09.000000Z",
        updated_at: "2024-04-25T23:59:09.000000Z",
      },
    };

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: user });
    });

    const response = await UsersService(mockAxios).getMe();

    expect(response.data).toHaveProperty("id");
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("email");
    expect(response.data).toHaveProperty("apikey");
  });

  it("should recreate apikey", async () => {
    const apikey = {
      id: "9be4eb77-315b-48cf-bd34-378fa115ede6",
    };

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: apikey });
    });

    const response = await UsersService(mockAxios).generateApiKey();

    expect(response.data).toHaveProperty("id");
  });
});
