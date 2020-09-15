import lodash from "lodash";

const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => {
  import("./image_viewer").then((module) => {
    module.default();
  });
};

document.body.appendChild(button);

const sum2 = lodash.sum(10, 5);

console.log({ sum2 });
