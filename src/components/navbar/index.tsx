/**
 * https://dl2.io - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import Burger from "!preact-svg-loader!../../assets/icons/menu.svg";
import { Component, h } from "preact";
import { Link } from "preact-router/match";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State extends Readonly<T> {
  //
}

// tslint:disable:max-line-length
// prettier-ignore
const MenuItem = ({ children, href }: Props) => (
  <Link activeClassName={styles.menuActive} class={styles.menuItem} href={href}>
    {children}
  </Link>
);
// tslint:enable

export default class Header extends Component<Props, State> {
  // tslint:disable:max-line-length
  // prettier-ignore
  public render() {
    return (
      <header class={styles.navbar} role="navigation" aria-label="main navigation">
        <a class={styles.brand} href="/" title="DL2 IT Services">
          <span class={styles.title}>Brand</span>
          <ul>
            <li>made</li>
            <li>with</li>
            <li>&lt;/&gt;</li>
          </ul>
        </a>

        <button class={`button is-link is-outlined ${styles.opener}`}>
          <Burger class="icon" />
        </button>

        <div class={styles.container}>
          <nav class={styles.menu}>
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/#2">Link 2</MenuItem>
            <MenuItem href="/#3">Link 3</MenuItem>
            <MenuItem href="/#4">Link 4</MenuItem>
          </nav>
        </div>
      </header>
    );
  }
}
