const Button = (props) => {
	// prefer destructuring to access props
	const { label } = props;
	return (
    <button>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

ReactDOM.render(<Button label="Do" />, mountNode);