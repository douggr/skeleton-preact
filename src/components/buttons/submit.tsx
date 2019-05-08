/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { h } from "preact";
import { Form } from "preact-forms-helper";

interface Props extends JSX.HTMLAttributes {
  //
  form: Form;
}

export default ({ children, className, form, ...props }: Props) => {
  // prettier-ignore
  return (
    <button {...props} class={`button is-info ${className || ""}`} disabled={!form.isValid()} type="submit">
      {children}
    </button>
  );
};
