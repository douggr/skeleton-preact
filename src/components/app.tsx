/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Identity } from "@dl2/identity-interface";
import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import Home from "../routes/home";
import Footer from "./footer";
import NavBar from "./navbar";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State extends Readonly<T> {
  //
}

export default class App extends Component<Props, State> {
  public componentDidMount() {
    const $loader = document.getElementById("loader");

    if ($loader) {
      $loader.remove();
    }
  }

  public render() {
    return (
      <div class="layout" id="layout">
        <NavBar />
        <main class={`dl2-env--${process.env.NODE_ENV}`}>
          <Router onChange={this.$handleRoute}>
            <Route component={Home} default={true} />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }

  private $handleRoute = (event: RouterOnChangeArgs) => {
    this.$scrollIntoView(event.url);
  };

  private $scrollIntoView = (url: string) => {
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
