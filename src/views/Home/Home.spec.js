import Home from "./index.vue";
import { routes } from "../../router";

import { createRouter, createWebHistory } from "vue-router";
import { shallowMount } from "@vue/test-utils";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

describe("<Home />", () => {
  it("should render home correctly", async () => {
    router.push("/");
    // await router.isReady();
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  
    const footer = wrapper.find('p');

    expect(footer.text()).toContain("FeedBacker© 2024");
  });
});
