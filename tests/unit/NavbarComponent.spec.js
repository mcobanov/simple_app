import { shallowMount } from "@vue/test-utils";
import NavbarComponent from "@/components/NavbarComponent.vue";

describe("NavbarComponent.vue", () => {
  it("should be created", () => {
    expect(NavbarComponent.created).toBeTruthy  
  });
});

describe("NavbarComponent.vue", () => {
  it("should not display hamburger icon when created", () => {
    const isMobileView = false;
    const wrapper = shallowMount(NavbarComponent, {
      propsData: { isMobileView },
      stubs: ['router-link']
    });
    expect(wrapper.find('.hamburger')).toBeFalsy;
  });
});
