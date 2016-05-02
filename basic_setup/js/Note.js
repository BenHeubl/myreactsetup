var Note = React.createClass({
  edit: function() {
    alert("editing note");
  },
  remove: function() {
    alert("removing note");
  },
  renderDisplay: function () { // renderDisplay will show the contents of our note

  },
  renderForm: function () { // this custom method will allow us to render out note

  },
    render: function() {
      return (
        <div className="note">
        <p>{this.props.children}</p>
            <span>
                <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
                <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
            </span>
        </div>
      );
    }
});

React.render(<Note>Hello World</Note>,
    document.getElementById('react-container2'));


/// important concept in react: State
// when a component's state data changes, the render
// function will be called again to rerender the State


// ######### EVENT HANDLING #########################
// Handling state for button
var Checkibox = React.createClass({
    getInitialState: function() { // method: returns an opbject, inside of this object we are going to initialize the initial state
      return {checked: true}
      // when application first loads, the checkbox will be unchecked
    },
    handleCheck: function () { // this is a function that helps us to deal with the state of the checkbox
      this.setState({checked: !this.state.checked})  // this will help us to toggle on and off
      // setState is the primary method we use to trigger any user interface update from event handlers
    },
    render: function() { // every state is passed to the render function
      var message;  // create new variable inside of render funciton
      if (this.state.checked) { // if checked is true
        message = "checked";
      } else {
        message = "unchecked";
      }
      // use defaultChecked for the radiobutton to set default setting of the input
      return (<div>
          <input type="checkbox" onClick={this.handleCheck}
          defaultChecked={this.state.checked}/>
          <p>This box is now {message}</p>
        </div>);
    }
});

React.render(<Checkibox></Checkibox>,
    document.getElementById('react-container3'));
