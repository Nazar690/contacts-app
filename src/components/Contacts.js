import React from 'react';

class Contacts extends React.Component {
    state = {
        isEdit: false,
        name: {
            first: '',
            last: ''
          },
        phone: '',
        img: ''
    }

    changeData = (data) => {
        let state = {...this.state};
        let title = data.target.name;
        title === 'first' || title === 'last' ? state.name[title] = data.target.value : state[title] = data.target.value;
        this.setState(state);
        this.props.update(state, this.props.id);
    }

    handleEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

   render() {
      return (
            <div className="contact" id={this.props.id}>
                <div className="profile">
                    <img
                    className="profile-image" 
                    src = {this.props.image || "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"} 
                    alt="" />
                    {this.state.isEdit ? 
                    <div>
                        <input type="text" name="first" onChange={this.changeData} placeholder={this.props.firstName}/>
                        <input type="text" name="last" onChange={this.changeData} placeholder={this.props.lastName}/> 
                    </div> : <p className="name">{ this.props.firstName} {this.props.lastName}</p>}
                </div>
                {this.state.isEdit ? <input type="text" name="phone" onChange={this.changeData} placeholder={this.props.phone}/> : <p className="phone">{this.props.phone}</p>}
                <div>
                    <button className="btn-edit" onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        )
    }
}


export default Contacts;