/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { h } from "preact";
import ShowNavBar from "../../components/page/show-navbar";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State {
  //
}

export default class Home extends ShowNavBar<Props, State> {
  public render() {
    // prettier-ignore
    return (
      <section class="section is-info">
        <h1 class="has-text-centered is-size-1">
          Preact X + Bulma optionated template
        </h1>

        <p class={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Natus voluptatum, tenetur numquam perferendis consectetur
          delectus corrupti minus deserunt rem? Esse atque deserunt a
          ratione earum exercitationem labore qui quisquam officia!
        </p>
      </section>
    );
  }
}
