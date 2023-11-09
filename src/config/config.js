import { instructions } from "./constants";

export const formConfig = [
  {
    type: "radio",
    label: "Nota para a textura 001 ?",
    name: "res1",
    // buttonText: "What's next",
    options: {
      choices: ["1", "2", "3", "4", "5"],
      img: "001",
    },
    validation: {
      required: true,
    },
  },

];
