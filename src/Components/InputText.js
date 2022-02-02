import { Component } from "react";

class InputText extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }
  render() {
    const { labelName, logo, type } = this.props;
    return (
      <label htmlFor={labelName} className="flex flex-col text-white">
        {labelName}
        <div className="mt-3 mb-3 flex h-12 w-fit flex-row rounded-full bg-second-gray p-2">
          <img src={logo} alt={`${labelName}`} className="mr-2" />
          <input
            type={type}
            name={labelName}
            id={labelName}
            onChange={this.handleChange}
            className="rounded-r-full bg-second-gray text-white focus:outline focus:outline-1 focus:outline-white"
          />
        </div>
      </label>
    );
  }
}

export default InputText;
