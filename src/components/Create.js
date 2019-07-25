import React from 'react';

class Create extends React.Component {
    constructor() {
        super()
        
        this.state = {
            name: {
              first: "",
              last: ""
            },
            phone: "",
            img: ""
          };
    }
        
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.props.click()
      }
    
    handleChange = (data) => {
        let state = {...this.state};
        let title = data.target.name;
        title === 'first' || title === 'last'? state.name[title] = data.target.value : state[title] = data.target.value;
        this.setState(state);
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            img: URL.createObjectURL(event.target.files[0])
          });
        }
    }
      
    render() {
        return(
            <form className="contacts-form" onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <label htmlFor="first">First name:</label>
                    <input 
                        type="text" 
                        name="first" 
                        placeholder="Your Name..." 
                        required
					    onChange={this.handleChange}
                    ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="last">Last name:</label>
                    <input 
                        type="text" 
                        name="last" 
                        placeholder="Your Name..." 
                        required
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Your Phone..." 
                        required
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="input-field">
                    <img className="profile-img" src={this.state.img} alt=""/>
                    <input className="profile-img-picker" type="file" onChange={this.onImageChange}></input>
                </div>
                <div className="buttons">
                    <button type="submit"  className="btn btn-save">Save</button>
                    <button type="reset" className="btn btn-cancel" onClick={this.props.click}>Cancel</button>  
                </div>
            </form>
        )
    }
}

export default Create;