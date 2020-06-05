import React, { Component } from "react";
// import Answer from "./Answer";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // file : [], //
            text : "", // text asal
            option : "", // dari bahasa apa ke bahasa apa
            result: [] // text hasil translasi
        }
        // this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value })
    }

    // handleClick(event) {
    //     var fileArray = []
    //         Array.from(event.target.files).map( file =>{
    //                 var array = []
    //                 array.push(file.name) 

    //                 var fileReader = new FileReader()
    //                 fileReader.onloadend = e => (array.push(fileReader.result))
    //                 fileReader.readAsText(file)

    //                 fileArray.push(array)
    //             }
    //         )
    //     this.setState({file : fileArray})
    // }

    handleSubmit() {
        // event.preventDefault();
        // if ((this.state.file !== {}) && (this.state.keyword !== "") && (this.state.alg !== "")) {
            fetch('http://localhost:5000/'.concat(this.state.option), {
                method : 'post',
                headers : {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    // 'file' : this.state.file,
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
                {/* <div>
                    File Kosa Kata: 
                    <br></br>
                    <label for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Pilih File
                    </label>
                    <input 
                        id="file-upload"
                        type="file" 
                        placeholder="Choose file" 
                        name = "file"
                        onChange={this.handleClick}
                        required multiple
                    />
                </div> */}
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
                {/* <div className="HL">
                    <br></br>
                </div> */}
                <br></br>
                <div className="Result">
                    Hasil Translasi:
                    <div> {this.state.result} </div>
                </div>
                <br></br>
                <br></br>
                {/* <div className="HL">
                    <br></br>
                </div> */}
            </div>
        )
    }
}

export default Form;
