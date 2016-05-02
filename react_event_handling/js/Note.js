var Note = React.createClass({
  getInitialState: function () {
    // when loads, the default state of the app should be the display, rather than the form
    return {editing: false}
  },
  edit: function() {
    this.setState({editing: true})
  },
  save: function () { // will do the opposite of edit, will save
    var val = this.refs.newtexthere.getDOMNode().value;
    alert("this is the new text here" + val)  // refs are a reliable way to access the properties of that underlying DOM node
    // I can also use refs to flow data to child components, in case where it is difficult to do so with props and state
    // so once we click save, we should not be able to edit our application any more
    this.setState({editing: false})
  },
  remove: function() {
    alert("removing note");
  },
  renderDisplay: function () { // renderDisplay will show the contents of our note
    return (
      <div className="note">
      <p>{this.props.children}</p>
          <span>
              <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
              <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
          </span>
      </div>
    );
  },
  renderForm: function () { // this custom method will allow us to render out note
    // textarea is a from input
    // defaulValue is a default text
    //form-control is a boostrap class, that will make our texare look good when selected
    // the button will create our save button
    return (
      <div className="note">
      <textarea ref="newtexthere" defaultValue={this.props.children} className="form-control"></textarea>
      <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"></button>
      </div>
    );
  },
  render: function() { // change render function so it either shows form (so you can edit) or display (you cant, and its saved)
    // we can do this via if else statement
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  } // ends redner function
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
