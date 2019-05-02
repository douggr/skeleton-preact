/**
 * https://dl2.io - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Component, h } from "preact";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State extends Readonly<T> {
  //
}

export default class Header extends Component<Props, State> {
  // tslint:disable:max-line-length
  public render() {
    return (
      <footer class={`has-background-grey ${styles.footer}`}>
        <a class={styles.title} href="/">
          Brand
        </a>

        <span>
          made with &lt;/&gt;
        </span>
      </footer>
    );
  }
}
