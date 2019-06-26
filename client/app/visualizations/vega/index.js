import Editor from "./Editor";
import Renderer from "./Renderer";
import { DEFAULT_OPTIONS } from "./consts";

export default {
  type: "VEGA",
  name: "Vega Spec",
  getOptions: options => ({ ...DEFAULT_OPTIONS, ...options }),
  Renderer,
  Editor,
  defaultRows: 9,
  defaultCols: 2,
};
