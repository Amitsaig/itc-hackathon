import React, { Component } from 'react';
import { register } from '../lib/CorPortunityFunctions';
import { withRouter } from 'react-router-dom';

class RegisterInvestor extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            places: [],
            are: false,
            aus: false,
            bra: false,
            can: false,
            che: false,
            chn: false,
            deu: false,
            gbr: false,
            ind: false,
            isr: false,
            jpn: false,
            nld: false,
            usa: false,
            industries: [],
            foodAndBeverage: false,
            tech: false,
            health: false,
            toys: false,
            fashion: false,
            realEstate: false,
            gaming: false,
            marketing: false
        }

        this.onChange = this.onChange.bind(this);
        this.handleCheckBoxPlaces = this.handleCheckBoxPlaces.bind(this);
        this.handleCheckBoxIndustries = this.handleCheckBoxIndustries.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCheckBoxPlaces(event, item) {
        const newState = {};
        newState[item] = !this.state[item];
        this.setState({...this.state, ...newState})
        if (this.state[item] === true) {
            this.state.places.push(item)
        } else {
            this.removePlace(event)
        }
    }

    handleCheckBoxIndustries(event, item) {
        const newState = {};
        newState[item] = !this.state[item];
        this.setState({...this.state, ...newState})
        if (this.state[item] === true) {
            this.state.industries.push(item)
        } else {
            this.removeIndustry(event)
        }
    }

    removePlace(event) {
        let array = [...this.state.places]
        let index = array.indexOf(event.target.value)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({places: array})
        }
    }

    removeIndustry(event) {
        let array = [...this.state.industries]
        let index = array.indexOf(event.target.value)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({industries: array})
        }
    }

    onSubmit(event) {
        event.preventDefault()

        const newInvestor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            places: this.state.places,
            industries: this.state.industries
        }

        register(newInvestor).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div className='Black-text'>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="Enter Your First Name" value={this.state.firstName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Enter Your Last Name" value={this.state.lastName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div>
                        <label> Countries you are interested in investing in:
<<<<<<< HEAD
                            <input type="checkbox" checked={this.state.are.checked} name="ARE" value="ARE" onChange={event => this.handleCheckBox(event, "ARE")}/>ARE
                            <input type="checkbox" checked={this.state.aus.checked} name="AUS" value="AUS" onChange={event => this.handleCheckBox(event, "AUS")}/>AUS
                            <input type="checkbox" checked={this.state.bra.checked} name="BRA" value="BRA" onChange={event => this.handleCheckBox(event, "BRA")}/>BRA
                            <input type="checkbox" checked={this.state.can.checked} name="CAN" value="CAN" onChange={event => this.handleCheckBox(event, "CAN")}/>CAN
                            <input type="checkbox" checked={this.state.che.checked} name="CHE" value="CHE" onChange={event => this.handleCheckBox(event, "CHE")}/>CHE
                            <input type="checkbox" checked={this.state.chn.checked} name="CHN" value="CHN" onChange={event => this.handleCheckBox(event, "CHN")}/>CHN
                            <input type="checkbox" checked={this.state.deu.checked} name="DEU" value="DEU" onChange={event => this.handleCheckBox(event, "DEU")}/>DEU
                            <input type="checkbox" checked={this.state.gbr.checked} name="GBR" value="GBR" onChange={event => this.handleCheckBox(event, "GBR")}/>GBR
                            <input type="checkbox" checked={this.state.ind.checked} name="IND" value="IND" onChange={event => this.handleCheckBox(event, "IND")}/>IND
                            <input type="checkbox" checked={this.state.isr.checked} name="ISR" value="ISR" onChange={event => this.handleCheckBox(event, "ISR")}/>ISR
                            <input type="checkbox" checked={this.state.jpn.checked} name="JPN" value="JPN" onChange={event => this.handleCheckBox(event, "JPN")}/>JPN
                            <input type="checkbox" checked={this.state.nld.checked} name="NLD" value="NLD" onChange={event => this.handleCheckBox(event, "NLD")}/>NLD
                            <input type="checkbox" checked={this.state.usa.checked} name="USA" value="USA" onChange={event => this.handleCheckBox(event, "USA")}/>USA
=======
                            <input type="checkbox" checked={this.state.are.checked} name="ARE" value="ARE" onChange={event => this.handleCheckBoxPlaces(event, "ARE")}/>ARE
                            <input type="checkbox" checked={this.state.aus.checked} name="AUS" value="AUS" onChange={event => this.handleCheckBoxPlaces(event, "AUS")}/>AUS
                            <input type="checkbox" checked={this.state.bra.checked} name="BRA" value="BRA" onChange={event => this.handleCheckBoxPlaces(event, "BRA")}/>BRA
                            <input type="checkbox" checked={this.state.can.checked} name="CAN" value="CAN" onChange={event => this.handleCheckBoxPlaces(event, "CAN")}/>CAN
                            <input type="checkbox" checked={this.state.che.checked} name="CHE" value="CHE" onChange={event => this.handleCheckBoxPlaces(event, "CHE")}/>CHE
                            <input type="checkbox" checked={this.state.chn.checked} name="CHN" value="CHN" onChange={event => this.handleCheckBoxPlaces(event, "CHN")}/>CHN
                            <input type="checkbox" checked={this.state.deu.checked} name="DEU" value="DEU" onChange={event => this.handleCheckBoxPlaces(event, "DEU")}/>DEU
                            <input type="checkbox" checked={this.state.gbr.checked} name="GBR" value="GBR" onChange={event => this.handleCheckBoxPlaces(event, "GBR")}/>GBR
                            <input type="checkbox" checked={this.state.ind.checked} name="IND" value="IND" onChange={event => this.handleCheckBoxPlaces(event, "IND")}/>IND
                            <input type="checkbox" checked={this.state.isr.checked} name="ISR" value="ISR" onChange={event => this.handleCheckBoxPlaces(event, "ISR")}/>ISR
                            <input type="checkbox" checked={this.state.jpn.checked} name="JPN" value="JPN" onChange={event => this.handleCheckBoxPlaces(event, "JPN")}/>JPN
                            <input type="checkbox" checked={this.state.nld.checked} name="NLD" value="NLD" onChange={event => this.handleCheckBoxPlaces(event, "NLD")}/>NLD
                            <input type="checkbox" checked={this.state.usa.checked} name="USA" value="USA" onChange={event => this.handleCheckBoxPlaces(event, "USA")}/>USA
>>>>>>> origin/master
                        </label>
                    </div>
                    <div>
                        <label> Industries you are interested in investing in:
<<<<<<< HEAD
                            <input type="checkbox" checked={this.state.foodAndBeverage.checked} name="food" value="Food and Beverage" onChange={event => this.handleCheckBox(event, "Food and Beverage")}/>Food and Beverage
                            <input type="checkbox" checked={this.state.tech.checked} name="tech" value="Tech" onChange={event => this.handleCheckBox(event, "Tech")}/>Tech
                            <input type="checkbox" checked={this.state.health.checked} name="health" value="Health" onChange={event => this.handleCheckBox(event, "Health")}/>Health
                            <input type="checkbox" checked={this.state.toys.checked} name="toys" value="Toys" onChange={event => this.handleCheckBox(event, "Toys")}/>Toys
                            <input type="checkbox" checked={this.state.fashion.checked} name="fashion" value="Fashion" onChange={event => this.handleCheckBox(event, "Fashion")}/>
                            <input type="checkbox" checked={this.state.realEstate.checked} name="real" value="Real Estate" onChange={event => this.handleCheckBox(event, "Real Estate")}/>Real Estate
                            <input type="checkbox" checked={this.state.gaming.checked} name="gaming" value="Gaming" onChange={event => this.handleCheckBox(event, "Gaming")}/>Gaming
                            <input type="checkbox" checked={this.state.marketing.checked} name="marketing" value="Marketing" onChange={event => this.handleCheckBox(event, "Marketing")}/>Marketing
=======
                            <input type="checkbox" checked={this.state.foodAndBeverage.checked} name="food" value="Food and Beverage" onChange={event => this.handleCheckBoxIndustries(event, "Food and Beverage")}/>Food and Beverage
                            <input type="checkbox" checked={this.state.tech.checked} name="tech" value="Tech" onChange={event => this.handleCheckBoxIndustries(event, "Tech")}/>Tech
                            <input type="checkbox" checked={this.state.health.checked} name="health" value="Health" onChange={event => this.handleCheckBoxIndustries(event, "Health")}/>Health
                            <input type="checkbox" checked={this.state.toys.checked} name="toys" value="Toys" onChange={event => this.handleCheckBoxIndustries(event, "Toys")}/>Toys
                            <input type="checkbox" checked={this.state.fashion.checked} name="fashion" value="Fashion" onChange={event => this.handleCheckBoxIndustries(event, "Fashion")}/>
                            <input type="checkbox" checked={this.state.realEstate.checked} name="real" value="Real Estate" onChange={event => this.handleCheckBoxIndustries(event, "Real Estate")}/>Real Estate
                            <input type="checkbox" checked={this.state.gaming.checked} name="gaming" value="Gaming" onChange={event => this.handleCheckBoxIndustries(event, "Gaming")}/>Gaming
                            <input type="checkbox" checked={this.state.marketing.checked} name="marketing" value="Marketing" onChange={event => this.handleCheckBoxIndustries(event, "Marketing")}/>Marketing
>>>>>>> origin/master
                        </label>
                    </div>
                    <button type="submit" className='Sign-up'>
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterInvestor)