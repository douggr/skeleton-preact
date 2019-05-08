/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import Logo from "!preact-svg-loader!../../assets/logos/dl2-h.svg";
import { h } from "preact";
import styles from "./styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

export default (attrs: Props) => {
  const { children, className, title, ...props } = attrs;

  // prettier-ignore
  return (
    <section {...props} class={`section columns ${className || ""}`}>
      <div class="column is-4 is-offset-4">
        <figure class={`has-text-centered ${styles.formContainerHeader}`}>
          <a class="is-size-1" href="/">
            <span>&lt;/&gt;</span> Brand
          </a>

          <figcaption class="is-size-3 has-text-weight-light">
            {title}
          </figcaption>
        </figure>

        {children}
      </div>
    </section>
  );
};
