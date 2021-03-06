import * as React     from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';
export default class ClickOutside extends React.Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  };
  container;
  getContainer = (ref) => {
    this.container = ref;
  }
  handle = (e) => {
    const { onClickOutside } = this.props;
    const CONTAINER = this.container;
    if (!CONTAINER.contains(e.target)) { onClickOutside(e); }
  }
  render() {
    // eslint-disable-next-line
    const { children, onClickOutside, ...props } = this.props;
    return <div className="P-click-outside" {...props} ref={this.getContainer}>{children}</div>;
  }
  componentDidMount() {
    document.addEventListener('click', this.handle, true);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true);
  }
}