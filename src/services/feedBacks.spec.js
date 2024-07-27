import mockAxios from "axios";
import FeedbacksService from "./feedBacks";

jest.mock("axios");

describe("feedBacksService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return amounts feedBacks type`s", async () => {
    const summary = {
      all: 0,
      other: 0,
      issue: 0,
      idea: 0,
    };

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: summary });
    });

    const response = await FeedbacksService(mockAxios).getSummary();

    expect(response.data).toHaveProperty("all");
    expect(response.data).toHaveProperty("other");
    expect(response.data).toHaveProperty("issue");
    expect(response.data).toHaveProperty("idea");
  });

  it("should return feedBacks only type is idea", async () => {
    const feedBacks = {
      data: [
        {
          id: "9be53857-5b13-46bd-a0dd-1a1714868830",
          api_key_id: "9be541de-5967-47d2-bfe5-bf2d0cd1e43b",
          fingerprint: "10wdjas0da93r0jf",
          text: "E se mudar a cor dessa página?",
          type: "IDEA",
          device: "Chrome 34, Mac OS",
          page: "https://feedbacker.com.br/ajuda",
          created_at: "2024-04-25T23:32:30.000000Z",
          updated_at: "2024-04-25T23:59:09.000000Z",
        },
      ],
      pagination: {
        offset: "0",
        limit: "5",
        total: 4,
      },
    };

    mockAxios.get.mockImplementationOnce(() => {
        return Promise.resolve(feedBacks);
      });

    const response = await FeedbacksService(mockAxios).getAll({type: 'idea'});
      
      response.data.map(feedBack => {
        expect(feedBack).toHaveProperty("type");
        expect(feedBack.type).toBe('IDEA');
        expect(feedBack).toHaveProperty("id");
        expect(feedBack).toHaveProperty("api_key_id");
        expect(feedBack).toHaveProperty("fingerprint");
        expect(feedBack).toHaveProperty("text");
        expect(feedBack).toHaveProperty("device");
        expect(feedBack).toHaveProperty("page");
        expect(feedBack).toHaveProperty("created_at");
        expect(feedBack).toHaveProperty("updated_at");
      });
  });

  it("should return feedBacks only type is other", async () => {
    const feedBacks = {
      data: [
        {
          id: "9be53857-5b13-46bd-a0dd-1a1714868830",
          api_key_id: "9be541de-5967-47d2-bfe5-bf2d0cd1e43b",
          fingerprint: "10wdjas0da93r0jf",
          text: "E se mudar a cor dessa página?",
          type: "OTHER",
          device: "Chrome 34, Mac OS",
          page: "https://feedbacker.com.br/ajuda",
          created_at: "2024-04-25T23:32:30.000000Z",
          updated_at: "2024-04-25T23:59:09.000000Z",
        },
      ],
      pagination: {
        offset: "0",
        limit: "5",
        total: 4,
      },
    };

    mockAxios.get.mockImplementationOnce(() => {
        return Promise.resolve(feedBacks);
      });

    const response = await FeedbacksService(mockAxios).getAll({type: 'other'});
      
      response.data.map(feedBack => {
        expect(feedBack).toHaveProperty("type");
        expect(feedBack.type).toBe('OTHER');
        expect(feedBack).toHaveProperty("id");
        expect(feedBack).toHaveProperty("api_key_id");
        expect(feedBack).toHaveProperty("fingerprint");
        expect(feedBack).toHaveProperty("text");
        expect(feedBack).toHaveProperty("device");
        expect(feedBack).toHaveProperty("page");
        expect(feedBack).toHaveProperty("created_at");
        expect(feedBack).toHaveProperty("updated_at");
      });
  });

  it("should return feedBacks only type is issue", async () => {
    const feedBacks = {
      data: [
        {
          id: "9be53857-5b13-46bd-a0dd-1a1714868830",
          api_key_id: "9be541de-5967-47d2-bfe5-bf2d0cd1e43b",
          fingerprint: "10wdjas0da93r0jf",
          text: "E se mudar a cor dessa página?",
          type: "ISSUE",
          device: "Chrome 34, Mac OS",
          page: "https://feedbacker.com.br/ajuda",
          created_at: "2024-04-25T23:32:30.000000Z",
          updated_at: "2024-04-25T23:59:09.000000Z",
        },
      ],
      pagination: {
        offset: "0",
        limit: "5",
        total: 4,
      },
    };

    mockAxios.get.mockImplementationOnce(() => {
        return Promise.resolve(feedBacks);
      });

    const response = await FeedbacksService(mockAxios).getAll({type: 'issue'});
      
      response.data.map(feedBack => {
        expect(feedBack).toHaveProperty("type");
        expect(feedBack.type).toBe('ISSUE');
        expect(feedBack).toHaveProperty("id");
        expect(feedBack).toHaveProperty("api_key_id");
        expect(feedBack).toHaveProperty("fingerprint");
        expect(feedBack).toHaveProperty("text");
        expect(feedBack).toHaveProperty("device");
        expect(feedBack).toHaveProperty("page");
        expect(feedBack).toHaveProperty("created_at");
        expect(feedBack).toHaveProperty("updated_at");
      });
  });
});
