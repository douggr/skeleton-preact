/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Fragment, h } from "preact";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

export default ({ children, className, ...props }: Props) => {
  // prettier-ignore
  return (
    <Fragment>
      <hr/>
      <footer {...props} class={`field is-grouped is-grouped-right ${styles.dl2FormActions} ${className || ""}`}>
        {children}
      </footer>
    </Fragment>
  );
};
