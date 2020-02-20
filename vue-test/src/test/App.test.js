import Vue from "vue";
import App from "../src/App";
import { isMainThread } from "worker_threads";

describe("App.test.js", () => {
  let cmp, vm;
  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Woof"]
      }
    }).$mount(); // Instances and mounts the components
  });
  isMainThread('equals messages to ["Woof"]', () => {
    expect(vm.messages).toEqual(["Woof"]);
  });
});
