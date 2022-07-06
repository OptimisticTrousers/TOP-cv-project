import React from 'react';
import Header from './components/common/Header/Header';
import Hello from './components/common/Hello/Hello';
import Interests from './components/common/Interests/Interests';
import CV from './components/common/CV/CV';
import Footer from './components/common/Footer/Footer';
import Input from './components/ui/Input/input';
import Textarea from './components/ui/Textarea/Textarea';
/* eslint-disable no-nested-ternary */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
    this.conditionallyRender = this.conditionallyRender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => ({
      submitted: !state.submitted,
    }));
  }

  handleEdit() {
    this.setState({
      submitted: false,
    });
  }

  conditionallyRender(
    submittedComponent,
    inputType,
    value,
    propName,
    handleChange,
    index,
    type
  ) {
    const { submitted } = this.state;

    return submitted ? (
      submittedComponent
    ) : inputType === 'input' ? (
      <Input
        value={value}
        handleChange={(event) => handleChange(event, propName, index)}
        type={type}
      />
    ) : inputType === 'textarea' ? (
      <Textarea
        value={value}
        handleChange={(event) => handleChange(event, propName, index)}
      />
    ) : (
      []
    );
  }

  render() {
    const { handleEdit, handleSubmit } = this;

    const { conditionallyRender } = this;
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Header />
          <Hello />
          <Interests />
          <CV conditionallyRender={conditionallyRender} />
          <button type="submit" className="save">
            Click Me to Save
          </button>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <Footer />
        </form>
      </div>
    );
  }
}

export default App;
