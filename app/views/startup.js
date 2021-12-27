import { me } from "appbit";
import document from "document";

import { Application, View, $at } from "../lib/view";

const $ = $at("#view-select");

export class ViewStartup extends View {
  
  constructor() {
    this.btnStart = $("#btnStart");

    super();
  }
  
  handleStart = () => {
    Application.switchTo("ViewAlienSelection");
  }

  onMount() {
    me.appTimeoutEnabled = false; // Disable timeout

    this.btnStart.addEventListener("click", this.handleStart);
  }

  onUnmount() {
    this.btnStart.removeEventListener("click", this.handleStart);
  }
  
}