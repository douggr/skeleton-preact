/**
 * https://dl2.io - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Component, h } from "preact";

export default abstract class ShowNavBar<P, S> extends Component<P, S> {
  protected readonly $classList = ["is-invisible"];
  protected readonly $navbar = document.getElementById("site-navbar");

  public componentDidMount() {
    this.$navbar!.classList.remove(...this.$classList);
  }
}
