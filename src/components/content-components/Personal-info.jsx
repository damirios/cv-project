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

    render() {
        return (
            <div className="personal-info">
                <h2 className='header-text'>Personal Info</h2>
                <div className="personal-info__grid">
                    <div className="personal-info__photo">
                        <label htmlFor="userphoto"></label>
                        <input id='userphoto' type="file" onChange={this.photoChange} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif,"/>
                    </div>
                    <div className="personal-info__common">
                        <Input type='text' placeholder='First name' name='first-name'/>
                        <Input type='text' placeholder='Last name' name='last-name'/>
                        <Input classname='personal-info__position' type='text' placeholder='Position' name='job-position'/>
                    </div>
                    <div className="personal-info__contacts">
                        <Input type='text' placeholder='Address' name='address'/>
                        <Input type='tel' placeholder='Phone number' name='phone'/>
                        <Input type='email' placeholder='Email' name='email' required='required'/>
                    </div>
                    <div className="personal-info__about-me">
                        <textarea name="about-me" placeholder='Tell about yourself'></textarea>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PersonalInfo;