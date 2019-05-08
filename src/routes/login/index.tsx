/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { h } from "preact";
import { Form, validateField, Validators } from "preact-forms-helper";
import { route } from "preact-router";
import Submit from "../../components/buttons/submit";
import FormActions from "../../components/form/actions";
import HideNavBar from "../../components/page/hide-sidebar";
import { Auth } from "../../services/auth";
import FormContainer from "./form-container";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State {
  //
  form: Form;
}

export default class extends HideNavBar<Props, State> {
  public readonly state: State = {
    form: new Form({
      password: {
        validators: [Validators.required(), Validators.minLength(4)],
      },
      username: {
        validators: [Validators.required(), Validators.minLength(4)],
      },
    }),
  };

  public render({  }: Props, { form }: State) {
    // prettier-ignore
    return (
      <FormContainer title="Login">
        <form onSubmit={this.$onSubmit}>
          <section class="columns">
            <div class="column field">
              <label class="label">Login</label>
              <input class="input" name="username" placeholder="Login or Email" type="text" onInput={validateField(this, form)} />
              <p class="help">
                Login or Email
              </p>
            </div>
          </section>

          <section class="columns">
            <div class="column field">
              <label class="label">Password</label>
              <input class="input" name="password" placeholder="Password" type="text" onInput={validateField(this, form)} />
              <a class="help has-text-weight-bold" href="/reset-password">
                Forgot password?
              </a>
            </div>
          </section>

          <FormActions>
            <a class="control is-expanded" href="/join">
              Create an account
            </a>

            <Submit form={form}>
              Sign in
            </Submit>
          </FormActions>
        </form>
      </FormContainer>
    );
  }

  private $onSubmit = async(event: any) => {
    const { form } = this.state;

    event.preventDefault();

    // prettier-ignore
    Auth.authenticate(form.getValues())
      .then(() => route("/", true));
  };
}
