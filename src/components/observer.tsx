/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Component, ComponentChildren, h } from "preact";

interface Props extends JSX.HTMLAttributes {
  children?: ComponentChildren | ComponentChildren[] | any | any[];
}

interface State {
  visible?: boolean;
}

export class Observer extends Component<Props, State> {
  private container: Element | null;
  private io: IntersectionObserver | null;

  constructor() {
    super();

    this.container = null;
    this.io = null;

    this.state = {
      visible: false,
    };
  }

  public async componentDidMount() {
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setState({
            visible: true,
          });

          if (this.io) {
            this.io.disconnect();
          }
        }
      });
    }, {});

    if (this.container) {
      this.io.observe(this.container);
    }
  }

  public componentWillUnmount() {
    if (this.io) {
      this.io.disconnect();
    }
  }

  // tslint:disable:max-line-length
  // prettier-ignore
  public render({ children, ...props }: Props, { visible }: State) {
    return (
      <span {...props} ref={($el) => { this.container = $el; }}>
        {Array.isArray(children) ? children.map((c) => c(visible)) : children(visible)}
      </span>
    );
  }
  // tslint:enable
}
