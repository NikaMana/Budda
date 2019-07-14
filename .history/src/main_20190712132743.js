import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/scroll";

import "./scripts/comments";
import "./scripts/menu-mobile";