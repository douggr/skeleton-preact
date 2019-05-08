/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Identity } from "@dl2/identity-interface";
import { h } from "preact";
import { Form, validateField, Validators } from "preact-forms-helper";
import Submit from "../../components/buttons/submit";
import FormActions from "../../components/form/actions";
import HideNavBar from "../../components/page/hide-sidebar";
import FormContainer from "../login/form-container";
import styles from "../login/styles.scss";

interface Props extends JSX.HTMLAttributes {
  //
}

interface State {
  //
  form: Form;
  requestSent: boolean;
}

interface TApiResponse {
  identity: Identity;
  token: string;
}

export default class AccountCreate extends HideNavBar<Props, State> {
  public readonly state: State = {
    form: new Form({
      email: {
        validators: [Validators.required(), Validators.email()],
      },
      password: {
        validators: [Validators.required(), Validators.minLength(5)],
      },
    }),
    requestSent: false,
  };

  public render({  }: Props, { form, requestSent }: State) {
    // prettier-ignore
    if (requestSent) {
      return (
        <FormContainer title="H U Z Z A H ;-)">
          <div class="notification is-info">
            <a href="/login" class="delete" />
            Check your email for a link to activate your account.
            If it doesn’t appear within a few minutes, check your
            spam folder.
          </div>
        </FormContainer>
      );
    }

    // prettier-ignore
    return (
      <FormContainer title="Create your personal account" className="is-6 is-offset-3">
        <form onSubmit={this.$onSubmit}>
          <section class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Name</label>
                <input class="input" name="name" placeholder="Name" type="text" />
              </div>
            </div>

            <div class="column">
              <div class="field">
                <label class="label">Surname</label>
                <input class="input" name="surname" placeholder="Surname" type="text" />
              </div>
            </div>
          </section>

          <div class="field">
            <label class="label">Email</label>
            <input class="input" name="email" onInput={validateField(this, form)} placeholder="Email" type="text" />
            <p class="help">
              We’ll occasionally send updates about your account to
              this inbox. <b>Privacy is a must! We’ll never share
              your email address with anyone.</b>
            </p>
          </div>

          <section class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Password</label>
                <input class="input" name="password" onInput={validateField(this, form)} placeholder="Password" type="text" />
                <p class="help">
                  Use 8 or more characters with a mix of letters,
                  numbers &amp; symbols
                </p>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <label class="label">Confirm Password</label>
                <input class="input" name="password-confirm" placeholder="Confirm Password" type="text" />
              </div>
            </div>
          </section>

          <FormActions>
            <a class="control is-expanded" href="/login">
              Back to Login instead?
            </a>

            <Submit form={form}>
              Create account
            </Submit>
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
