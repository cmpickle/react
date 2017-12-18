const Button = (props) => {
	return (
  	<button>{props.label}</button>
  );
};

ReactDOM.render(<Button label="Do" />, mountNode);