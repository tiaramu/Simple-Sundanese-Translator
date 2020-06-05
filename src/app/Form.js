import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : "", // text asal
            option : "", // dari bahasa apa ke bahasa apa
            result: [] // text hasil translasi
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value })
    }

    handleSubmit() {
            fetch('http://localhost:5000/'.concat(this.state.option), {
                method : 'post',
                headers : {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    'text' : this.state.text
                })
            }).then(res => res.json())
                .then(data => this.setState({result : data.data}))
                    .then(e => console.log(this.state.result))
                        .catch(err => console.log(err))
        // }
    }

    render() {
        return (
            <div>
                <br></br>
                <div>
                    Kalimat: 
                    <br></br>
                    <input
                        type="text"
                        placeholder="Tulis kalimat di sini!"
                        name="text"
                        onChange={this.handleChange}
                    />
                </div>
                <br></br>
                <div>
                    Jenis Translasi:

                    <br></br>
                    <div><input
                        type="radio" 
                        name="option" 
                        value="indosunda"
                        onChange={this.handleChange}
                    />Indonesia - Sunda</div>

                    <div><input
                        type="radio" 
                        name="option" 
                        value="sundaindo"
                        onChange={this.handleChange}
                    />Sunda - Indonesia</div>
                </div>
                <br></br>
                <div className="ButtonCont">
                <button
                    className="Button" 
                    name="submit"
                    onClick={this.handleSubmit}
                    >Translasi!</button>
                </div>
                <br></br>
                <br></br>
                <div className="Result">
                    Hasil Translasi:
                    <div> {this.state.result} </div>
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Form;
