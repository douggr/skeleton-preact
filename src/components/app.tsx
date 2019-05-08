/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Identity } from "@dl2/identity-interface";
import { h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import AccountCreate from "../routes/account/create";
import AccountResetPassword from "../routes/account/reset-password";
import Home from "../routes/home";
import Login from "../routes/login";
import { Auth } from "../services/auth";
import Footer from "./footer";
import NavBar from "./navbar";
import ShowNavBar from "./page/show-navbar";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State {
  identity: null | Identity;
}

export default class App extends ShowNavBar<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      identity: Auth.identity,
    };
  }

  public componentDidMount() {
    const $loader = document.getElementById("loader");
    const $navbar = document.getElementById("site-navbar");

    if ($loader) {
      $loader.remove();
    }

    if ($navbar) {
      $navbar.classList.remove("is-hidden");
    }
  }

  public render({  }: Props, { identity }: State) {
    // prettier-ignore
    return (
      <div class="layout" id="layout">
        <NavBar identity={identity} />
        <main class={`dl2-env--${process.env.NODE_ENV}`}>
          <Router onChange={this.$handleRoute}>
            <Route component={AccountCreate} path="/join" />
            <Route component={AccountResetPassword} path="/reset-password" />
            <Route component={Home} default={true} />

            {!identity && <Route component={Login} path="/login" />}
            {identity  && <Route component={this.$logout} path="/logout" />}
          </Router>
        </main>
        <Footer />
      </div>
    );
  }

  private $handleRoute = (event: RouterOnChangeArgs) => {
    this.$scrollIntoView(event.url);
  };

  private $logout = () => {
    this.setState({ identity: Auth.logout() });

    return null;
  };

  private $scrollIntoView = (url: string) => {
    this.setState({ identity: Auth.identity });

    if (!url || url === "/") {
      return window.scroll({
        behavior: "smooth",
        top: 0,
      });
    }

    //
    // await for all components to mount
    new Promise((resolve) => setTimeout(resolve, 50)).then(() => {
      const id = url.replace(/^\/?#?/, "");
      const element = document.getElementById(id);

      if (!element) {
        return window.scroll({
          behavior: "smooth",
          top: 0,
        });
      }

      element.scrollIntoView({
        behavior: "smooth",
      });
    });
  };
}
