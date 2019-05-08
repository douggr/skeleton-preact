/**
 * https://dl2.io - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { h } from "preact";
import ShowNavBar from "./show-navbar";

export default abstract class HideNavBar<P, S> extends ShowNavBar<P, S> {
  public componentDidMount() {
    this.$navbar!.classList.add(...this.$classList);
  }
}
