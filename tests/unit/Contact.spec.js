import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

describe("Contact.vue", () => {
  it("should be created", () => {
    expect(Contact.created).toBeTruthy; 
  });
});

describe("Contact.vue", () => {
  it("should display toast on form submission", () => {
    const wrapper = shallowMount(Contact, {
      attachTo: document.getElementById('root')
    });
    wrapper.find("[type='submit']").trigger('click')
    expect(wrapper.find('.toasted')).toBeTruthy;
    wrapper.destroy();
  });
});
