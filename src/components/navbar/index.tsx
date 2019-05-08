/**
 * https://dl2.io - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import Burger from "!preact-svg-loader!../../assets/icons/menu.svg";
import { Identity } from "@dl2/identity-interface";
import { Component, h } from "preact";
import { Link } from "preact-router/match";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
  identity?: null | Identity;
}

interface State {
  //
}

// prettier-ignore
const MenuItem = ({ children, href }: Props) => (
  <Link activeClassName={styles.menuActive} class={styles.menuItem} href={href}>
    {children}
  </Link>
);

export default class NavBar extends Component<Props, State> {
  public render({ className, identity }: Props) {
    // prettier-ignore
    return (
      <header aria-label="main navigation" class={`${styles.navbar} ${className || ""}`} id="site-navbar" role="navigation">
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
            {!identity && <MenuItem href="/login">Login</MenuItem>}
            {identity  && <MenuItem href="/logout">Logout</MenuItem>}
          </nav>
        </div>
      </header>
    );
  }
}
