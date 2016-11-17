const React = require ('react')

class EyesOnMe extends React.Component {
  constructor(){
    super();
    this.btnFocus = this.btnFocus.bind(this);
    this.btnBlur = this.btnBlur.bind(this);
  }

  btnFocus(){
    console.log('Good!');
  }

  btnBlur(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <div>
        <button onFocus={this.btnFocus} onBlur={this.btnBlur}>Button</button>
      </div>
    );
  }
}

module.exports = EyesOnMe;