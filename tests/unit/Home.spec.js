import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  it("should be created", () => {
    expect(Home.created).toBeTruthy;
  });
});

describe("Home", () => {
  it("should have title", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('h2').text()).toBe('Geralt of Rivia');
  });
});
