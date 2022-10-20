import React, { Component } from 'react';
import Input from '../utilities/input';


class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.photoChange = this.photoChange.bind(this);
    }

    photoChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const file = e.target.files[0];

            reader.readAsDataURL(file);

            reader.onload = () => {
                const userphoto = document.querySelector('.personal-info__photo label');
                
                if ( userphoto.querySelector('img') ) {
                    const prevImage = userphoto.querySelector('img');
                    prevImage.remove();
                }
                const image = document.createElement('img');

                image.src = reader.result;
                userphoto.appendChild(image);
            }
            



        }
    }

    getPhoto(example) {
        if (example == null) {
            return "./images/avatar.png";
        }
        return example.photo;
    }

    getFisrtName(example) {
        if (example == null) {
            return "";
        }
        return example.firstName;
    }

    getLastName(example) {
        if (example == null) {
            return "";
        }
        return example.lastName;
    }

    getPosition(example) {
        if (example == null) {
            return "";
        }
        return example.position;
    }

    getAddress(example) {
        if (example == null) {
            return "";
        }
        return example.address;
    }

    getPhone(example) {
        if (example == null) {
            return "";
        }
        return example.phone;
    }

    getEmail(example) {
        if (example == null) {
            return "";
        }
        return example.email;
    }

    getDescription(example) {
        if (example == null) {
            return "";
        }
        return example.description;
    }

    render() {
        const {personal} = this.props;
        
        return (
            <div className="personal-info">
                <h2 className='header-text'>Personal Info</h2>
                <div className="personal-info__grid">
                    <div className="personal-info__photo">
                        <label htmlFor="userphoto">
                            <img src={this.getPhoto(personal)} alt="avatar" />
                        </label>
                        <input id='userphoto' type="file" onChange={this.photoChange}
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .tif,"/>
                    </div>
                    <div className="personal-info__common">
                        <Input type='text' placeholder='First name' name='first-name' value={this.getFisrtName(personal)} />
                        <Input type='text' placeholder='Last name' name='last-name' value={this.getLastName(personal)} />
                        <Input classname='personal-info__position' type='text' placeholder='Position' name='job-position' value={this.getPosition(personal)}/>
                    </div>
                    <div className="personal-info__contacts">
                        <Input type='text' placeholder='Address' name='address' value={this.getAddress(personal)} />
                        <Input type='tel' placeholder='Phone number' name='phone' value={this.getPhone(personal)} />
                        <Input type='email' placeholder='Email' name='email' required='required' value={this.getEmail(personal)} />
                    </div>
                    <div className="personal-info__about-me">
                        <textarea name="about-me" placeholder='Tell about yourself' defaultValue={this.getDescription(personal)}></textarea>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PersonalInfo;