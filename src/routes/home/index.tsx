/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Component, Fragment, h } from "preact";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State extends Readonly<T> {
  //
}

export default class Home extends Component<Props, State> {
  // tslint:disable:max-line-length
  public render() {
    return (
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="has-text-centered is-size-1">
            Preact X + Bulma optionated template
          </h1>

          <p class={styles.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            voluptatum, tenetur numquam perferendis consectetur delectus
            corrupti minus deserunt rem? Esse atque deserunt a ratione earum
            exercitationem labore qui quisquam officia!
          </p>
        </div>
      </section>
    );
  }
}
