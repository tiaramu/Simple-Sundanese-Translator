import React, { Component } from "react";

class Answer extends Component {
    constructor(props) {
        super(props);
        this.judul = props.value.judul;
        this.kalimat = props.value.kalimat;
        this.jumlah = props.value.jumlah;
        this.waktu = props.value.waktu;
    }

    render() {
        return (
            <div>
                <div>Kalimat Awal: 
                    <br></br>
                    {this.kalimat}
                </div>
                <div>
                    Hasil Translasi: 
                    <br></br>
                    {this.jumlah}
                </div>
            </div>
        )
    }
}

export default Answer;
