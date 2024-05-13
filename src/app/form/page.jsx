'use client'
import Header from '@/shared/header/header'
import React, { useState } from 'react'
import style from './style.module.scss'

const page = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const cards1 = [
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option1", label: 'Detached' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option2", label: 'Semi Detached' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option3", label: 'Terrace' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option4", label: 'Flat' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option5", label: 'Bungalow' },
    ]

    const cards2 = [
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option1", label: 'Ground Floor' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option2", label: 'Loft' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option3", label: 'First Floor' },
        { image: 'https://dwpbnzvyubj62.cloudfront.net/assets/_global/icons/house_types/detached-35970db5460665aed5d931f2b6b2ddd141a7db12a8ed71966872aab630972fe7.svg', value: "option4", label: 'Other' },
    ]

    const cards3 = [
        { value: "option1", label: '1' },
        { value: "option2", label: '2' },
        { value: "option3", label: '3' },
        { value: "option4", label: '4' },
        { value: "option5", label: '5+' },
    ]

    const cards4 = [
        { value: "option1", label: 'ASAP' },
        { value: "option2", label: '3 Months' },
        { value: "option3", label: '6 Months' },
        { value: "option4", label: '12 Months' },
        { value: "option5", label: '18 Months +' },
        { value: "option6", label: 'Im not sure' },
    ]

    const cards5 = [
        { value: "option1", label: 'Architectural drawings' },
        { value: "option2", label: 'Design and planning advice' },
        { value: "option3", label: 'Help with financing my build' },
        { value: "option4", label: 'Help finding a builder' },
        { value: "option5", label: 'Help finding other professionals' },
    ]

    const cards6 = [
        { value: "option1", label: 'Structural engineer' },
        { value: "option2", label: 'Party wall surveyor' },
        { value: "option3", label: 'Approved inspector' },
        { value: "option4", label: 'Other professionals' },
    ]

    const cards7 = [
        // { name='firstName', palceholder='', type='text', label='First name' },
        // { name='lastName', palceholder='', type='text', label='Last name' },
        // { name='address', palceholder='', type='text', label='Address' },
        // { name='postcode', palceholder='', type='text', label='Project postcode' },
        // { name='email', palceholder='', type='email', label='Email' },
        // { name='phone', palceholder='', type='number', label='Phone' },
    ]

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };

    console.warn(selectedOption)

    return (
        <>
            <Header />
            <div className={`${style.form_container}`}>
                <h1>
                    PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
                </h1>
                <div className={`${style.form_div}`}>
                    <form onSubmit="#">
                        <div className='mb-5'>
                            <h3>What sort of property is this?</h3>
                            <fieldset className={`${style.cards_div}`} role="radiogroup" >
                                {
                                    cards1.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <img src={val.image} />
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <div className='mb-5'>
                            <h3>And which bit do you want to extend?</h3>
                            <fieldset className={`${style.cards_div}`} role="radiogroup" >
                                {
                                    cards2.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <img src={val.image} />
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <div className='mb-5'>
                            <h3>How many bedrooms does this property have?</h3>
                            <p>This will give us an idea of the property's size</p>
                            <fieldset className={`${style.cards_div}`} role="radiogroup" >
                                {
                                    cards3.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <div className='mb-5'>
                            <h3>When are you hoping to start the design process?</h3>
                            <fieldset className={`${style.cards_div}`} role="radiogroup" >
                                {
                                    cards4.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <div className='mb-5'>
                            <h3>Are you interested in any of these services?</h3>
                            <fieldset className={`${style.cards_grid}`} role="radiogroup" >
                                {
                                    cards5.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <div className='mb-5'>
                            <p>What professionals are you looking for?</p>
                            <fieldset className={`${style.cards_grid}`} role="radiogroup" >
                                {
                                    cards6.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <div className={`${style.cards}`}>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={selectedOption === val.value}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <div className={`${style.cards_details}`}>
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>

                        <hr />

                        <div className='my-5'>
                            <h3>A few details from you, please...</h3>
                            <fieldset className={`${style.cards_grid} mb-3`} role="radiogroup" >
                                <div className="mb-2">
                                    <label className="mb-2">First Name<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='text'
                                        placeholder="John"
                                        name="firstName"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Last Name<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='text'
                                        placeholder="Clarck"
                                        name="lastName"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Address<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='text'
                                        placeholder="Holding Back Extension Ave."
                                        name="address"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Postcode<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='text'
                                        placeholder="SW1A 2AB"
                                        name="postcode"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Email<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='email'
                                        placeholder="johnclarck@gmail.com"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Phone<sup>*</sup></label>
                                    <input
                                        className={`${style.cards_input} form-control `}
                                        type='number'
                                        placeholder="0781234567"
                                        name="phone"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="mb-2">Where did you hear about us?<sup>*</sup></label>
                                    <select className='form-control'>
                                        <option value="">None selected</option>
                                        <option value="houzz">Houzz</option>
                                        <option value="google">Google</option>
                                        <option value="facebookinstagram">Facebook / Instagram</option>
                                        <option value="recommended">Recommended by a friend / colleague</option>
                                        <option value="press">Press</option>
                                        <option value="radio">Radio</option>
                                        <option value="magazine">Magazine</option>
                                        <option value="ITV">ITV - Television Ad</option>
                                        <option value="blog">Blog</option>
                                        <option value="pinterest">Pinterest</option>
                                        <option value="linkedIn">LinkedIn</option>
                                        <option value="tradeshow">Trade show</option>
                                        <option value="newsletter">Newsletter - Muddy Trowel</option>
                                        <option value="advertising">Advertising Board</option>
                                    </select>
                                </div>
                            </fieldset>
                            <div className="mb-2">
                                <input type="checkbox" className='mr-2' name="" value="" />
                                <label>I accept the terms and conditions</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" className='mr-2' name="" value="" />
                                <label>Keep me updated on PEPP news, events and offers.</label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default page