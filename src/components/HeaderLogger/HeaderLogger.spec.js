import HeadLogged from "./";
import { routes } from "../../router";

import { createRouter, createWebHistory } from "vue-router";
import { shallowMount } from "@vue/test-utils";

const mockStore = { currentUser: {} };
jest.mock("../../hooks/useStore", () => {
  return () => {
    return mockStore;
  };
});

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

describe("<HeadLogger />", () => {
  it.skip("should render header logged correctly", () => {
    router.push("/");
    const wrapper = shallowMount(HeadLogged, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it.skip("should render 3 dots when there´s not user logged", () => {
    router.push("/");
    const wrapper = shallowMount(HeadLogged, {
      global: {
        plugins: [router],
      },
    });

    const buttonLogout = wrapper.find("#logout-button");

    expect(buttonLogout.text()).toBe("...");
  });

  it("should render user name when there´s user logged", () => {
    router.push("/");

    mockStore.currentUser.name = "Welen";

    const wrapper = shallowMount(HeadLogged, {
      global: {
        plugins: [router],
      },
    });

    const buttonLogout = wrapper.find("#logout-button");

    expect(buttonLogout.text()).toBe("Welen (Sair)");
  });
});
