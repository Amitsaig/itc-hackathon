import React, { Component } from 'react';
import { register, investors } from '../lib/CorPortunityFunctions';
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
            marketing: false,
            investors: [],
            listOfEmails: []
        }

        this.onChange = this.onChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handlePlacesArray = this.handlePlacesArray.bind(this);
        this.handleIndustriesArray = this.handleIndustriesArray.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.loadInvestors()
    }

    loadInvestors = async () => {
        const response = await investors()
        this.setState({
            investors: response.data
        })
        this.loadEmails()
    }

    loadEmails() {
        for (let i = 0; i < this.state.investors.investors.length; i++) {
            let newEmail = this.state.listOfEmails.concat(this.state.investors.investors[i].email)
            this.setState({
                listOfEmails: newEmail
            })
        }
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCheckBox(event, item) {
        const newState = {};
        newState[item] = !this.state[item];
        this.setState({ ...this.state, ...newState })
    }

    handlePlacesArray(event) {
        let place_list = this.state.places
        let check = event.target.checked
        let checked_place = event.target.value
        if (check) {
            let joined = this.state.places.push(checked_place)
            this.setState({
                places: joined
            })
        } else {
            let index = place_list.indexOf(checked_place)
            if (index > -1) {
                place_list.splice(index, 1)
                this.setState({
                    places: place_list
                })
            }
        }
    }

    handleIndustriesArray(event) {
        let industry_list = this.state.industries
        let check = event.target.checked
        let checked_industry = event.target.value
        if (check) {
            let joined = this.state.industries.push(checked_industry)
            this.setState({
                industries: joined
            })
        } else {
            let index = industry_list.indexOf(checked_industry)
            if (index > -1) {
                industry_list.splice(index, 1)
                this.setState({
                    industries: industry_list
                })
            }
        }
    }

    removePlace(item) {
        let list = [...this.state.places]
        let index = list.indexOf(item)
        list.splice(index, 1)
        this.setState({
            places: list
        })
    }

    removeIndustry(item) {
        let list = [...this.state.industries]
        let index = list.indexOf(item)
        list.splice(index, 1)
        this.setState({
            industries: list
        })
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

        if (newInvestor.firstName === '' || newInvestor.lastName === '' || newInvestor.email === '' || newInvestor.password === '' || newInvestor.places.length === 0 || newInvestor.industries.length === 0) {
            window.alert('Please make sure all fields are filled in!')
        } else {
            if (this.state.listOfEmails.includes(this.state.email)) {
                window.alert('This user already exists with this email. Please try again!')
            } else {
                register(newInvestor).then(res => {
                    this.props.history.push('/login')
                })
            }
        }
    }

    render() {
        return (
            <div className='Black-text Register-form'>
                <form className='Inputs' noValidate onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div>
                        <div className='Register-checkbox'> Countries you are interested in investing in:
                            <label><input type="checkbox" checked={this.state.are.checked} name="ARE" value="ARE" onChange={event => this.handleCheckBox(event, "ARE")} onClick={event => this.handlePlacesArray(event)} />ARE</label>
                            <label><input type="checkbox" checked={this.state.aus.checked} name="AUS" value="AUS" onChange={event => this.handleCheckBox(event, "AUS")} onClick={event => this.handlePlacesArray(event)} />AUS</label>
                            <label><input type="checkbox" checked={this.state.bra.checked} name="BRA" value="BRA" onChange={event => this.handleCheckBox(event, "BRA")} onClick={event => this.handlePlacesArray(event)} />BRA</label>
                            <label><input type="checkbox" checked={this.state.can.checked} name="CAN" value="CAN" onChange={event => this.handleCheckBox(event, "CAN")} onClick={event => this.handlePlacesArray(event)} />CAN</label>
                            <label><input type="checkbox" checked={this.state.che.checked} name="CHE" value="CHE" onChange={event => this.handleCheckBox(event, "CHE")} onClick={event => this.handlePlacesArray(event)} />CHE</label>
                            <label><input type="checkbox" checked={this.state.chn.checked} name="CHN" value="CHN" onChange={event => this.handleCheckBox(event, "CHN")} onClick={event => this.handlePlacesArray(event)} />CHN</label>
                            <label><input type="checkbox" checked={this.state.deu.checked} name="DEU" value="DEU" onChange={event => this.handleCheckBox(event, "DEU")} onClick={event => this.handlePlacesArray(event)} />DEU</label>
                            <label><input type="checkbox" checked={this.state.gbr.checked} name="GBR" value="GBR" onChange={event => this.handleCheckBox(event, "GBR")} onClick={event => this.handlePlacesArray(event)} />GBR</label>
                            <label><input type="checkbox" checked={this.state.ind.checked} name="IND" value="IND" onChange={event => this.handleCheckBox(event, "IND")} onClick={event => this.handlePlacesArray(event)} />IND</label>
                            <label><input type="checkbox" checked={this.state.isr.checked} name="ISR" value="ISR" onChange={event => this.handleCheckBox(event, "ISR")} onClick={event => this.handlePlacesArray(event)} />ISR</label>
                            <label><input type="checkbox" checked={this.state.jpn.checked} name="JPN" value="JPN" onChange={event => this.handleCheckBox(event, "JPN")} onClick={event => this.handlePlacesArray(event)} />JPN</label>
                            <label><input type="checkbox" checked={this.state.nld.checked} name="NLD" value="NLD" onChange={event => this.handleCheckBox(event, "NLD")} onClick={event => this.handlePlacesArray(event)} />NLD</label>
                            <label><input type="checkbox" checked={this.state.usa.checked} name="USA" value="USA" onChange={event => this.handleCheckBox(event, "USA")} onClick={event => this.handlePlacesArray(event)} />USA</label>
                        </div>
                    </div>
                    <div>
                        <div className='Register-checkbox'> Industries you are interested in investing in:
                            <label><input type="checkbox" checked={this.state.foodAndBeverage.checked} name="food" value="Food and Beverage" onChange={event => this.handleCheckBox(event, "Food and Beverage")} onClick={event => this.handleIndustriesArray(event)} />Food and Beverage</label>
                            <label><input type="checkbox" checked={this.state.tech.checked} name="tech" value="Tech" onChange={event => this.handleCheckBox(event, "Tech")} onClick={event => this.handleIndustriesArray(event)} />Tech</label>
                            <label><input type="checkbox" checked={this.state.health.checked} name="health" value="Health" onChange={event => this.handleCheckBox(event, "Health")} onClick={event => this.handleIndustriesArray(event)} />Health</label>
                            <label><input type="checkbox" checked={this.state.toys.checked} name="toys" value="Toys" onChange={event => this.handleCheckBox(event, "Toys")} onClick={event => this.handleIndustriesArray(event)} />Toys</label>
                            <label><input type="checkbox" checked={this.state.fashion.checked} name="fashion" value="Fashion" onChange={event => this.handleCheckBox(event, "Fashion")} onClick={event => this.handleIndustriesArray(event)} />Fashion</label>
                            <label><input type="checkbox" checked={this.state.realEstate.checked} name="real" value="Real Estate" onChange={event => this.handleCheckBox(event, "Real Estate")} onClick={event => this.handleIndustriesArray(event)} />Real Estate</label>
                            <label><input type="checkbox" checked={this.state.gaming.checked} name="gaming" value="Gaming" onChange={event => this.handleCheckBox(event, "Gaming")} onClick={event => this.handleIndustriesArray(event)} />Gaming</label>
                            <label><input type="checkbox" checked={this.state.marketing.checked} name="marketing" value="Marketing" onChange={event => this.handleCheckBox(event, "Marketing")} onClick={event => this.handleIndustriesArray(event)} />Marketing</label>
                        </div>
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