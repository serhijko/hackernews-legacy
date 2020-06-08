import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({
                  onClick,
                  className,
                  children,
                }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>;

const Loading = () =>
  <div>Loading ...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
    ? <Loading />
    : <Component { ...rest } />

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading;
