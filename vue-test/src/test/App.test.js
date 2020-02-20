import Vue from "vue";
import App from "../src/App";
describe("App.test.js", () => {
  let cp, vm;
  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Pooch"]
      }
    }).$mount(); // Instances and mounts the component
  });
  it('equals messages to ["Pooch"]', () => {
    expect(vm.messages).toEqual(["Pooch"]);
  });
});
