import React, {Component} from 'react';

class SingleField extends Component {

  render() {
    return(
      <div className={this.props.fieldClassName}>
        <input placeholder={this.props.inputPlaceholder} type={this.props.inputType} name={this.props.inputName}/>
      </div>
    );
  }
}

export default SingleField;