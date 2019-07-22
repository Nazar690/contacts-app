import React from 'react';

class Create extends React.Component {
    componentWillMount() {
        this.setState({
          name: {
            first: "",
            last: ""
          },
          phone: "",
          img: ""
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state)
      }
    
      handleChange(data) {
        let state = this.state;
        let title = data.target.name;
        title === 'first' || title === 'last'? state.name[title] = data.target.value : state[title] = data.target.value;
        this.setState(state);
    }
      
    render() {
        return(
            <form className="contacts-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-field">
                    <label htmlFor="first">First name:</label>
                    <input 
                        type="text" 
                        name="first" 
                        placeholder="Your Name..." 
                        required
					    onChange={this.handleChange.bind(this)}
                    ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="last">Last name:</label>
                    <input 
                        type="text" 
                        name="last" 
                        placeholder="Your Name..." 
                        required
                        onChange={this.handleChange.bind(this)}
                    ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Your Phone..." 
                        required
                        onChange={this.handleChange.bind(this)}
                    ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="fileupload">Image:</label>
                    <input type="file" name="fileupload"></input>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-save">Save</button>
                    <button type="reset" className="btn btn-cancel" onClick={this.props.click}>Cancel</button>  
                </div>
            </form>
        )
    }
}

export default Create;