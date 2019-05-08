/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { h } from "preact";
import { Form, validateField, Validators } from "preact-forms-helper";
import ButtonSubmit from "../../components/buttons/submit";
import FormActions from "../../components/form/actions";
import HideNavBar from "../../components/page/hide-sidebar";
import FormContainer from "../login/form-container";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State {
  //
  form: Form;
  requestSent: boolean;
}

export default class AccountResetPassword extends HideNavBar<
  Props,
  State
> {
  public readonly state: State = {
    form: new Form({
      username: {
        validators: [Validators.required(), Validators.minLength(4)],
      },
    }),
    requestSent: false,
  };

  public render({  }: Props, { form, requestSent }: State) {
    // prettier-ignore
    if (requestSent) {
      return (
        <FormContainer title="Email sent">
          <div class="notification is-info">
            <a href="/login" class="delete" />
            Check your email for a link to reset your password. If it
            doesn’t appear within a few minutes, check your spam folder.
          </div>
        </FormContainer>
      );
    }

    // prettier-ignore
    return (
      <FormContainer title="Reset your password">
        <form onSubmit={this.$onSubmit}>
          <section class="columns">
            <div class="column field">
              <label class="label">Login</label>
              <input class="input" name="username" onInput={validateField(this, form)} placeholder="Login or Email" type="text" />
              <p class="help">
                Enter your email address or login and we will send
                you a link to reset your password.
              </p>
            </div>
          </section>

          <FormActions>
            <a class="control is-expanded" href="/login">
              Back to Login instead?
            </a>

            <ButtonSubmit form={form}>
              Send email
            </ButtonSubmit>
          </FormActions>
        </form>
      </FormContainer>
    );
  }

  private $onSubmit = async(event: any) => {
    event.preventDefault();

    setTimeout(() => this.setState({ requestSent: true }), 650);
  };
}
