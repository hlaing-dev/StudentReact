import React, { Component } from 'react'
import axios from 'axios'

const api = 'http://localhost:8080/student/';

export class ProfileEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Sid: null,
            Name: '',
            Nrc: '',
            Pno: '',
            Address: '',
            fName: '',
            MName: '',
            Religion: '',
            FNrc: '',
            MNrc: '',
            SImage: ''
        }
    }

    componentDidMount() {
        let arr = document.URL.split('/');
        console.log('this.props.match.params.userId is=>', this.props.match)
        console.log('this.props.location.search=>', this.props.location.search)
        if (arr.length > 4) {
            let id = arr[arr.length - 1];
            axios.get(api + id).then(res => {
                let data = res.data[0];
                if(data.SImage){
                    var buffer = new Buffer( data.SImage.data , 'binary');
                    var bufferBase64 = buffer.toString('base64');
                    console.log('kkis>',bufferBase64);
                    this.setState({
                        Sid: data.Sid,
                        Name: data.Sid,
                        Nrc: data.Sid,
                        Pno: data.Sid,
                        Address: data.Sid,
                        fName: data.Sid,
                        MName: data.Sid,
                        Religion: data.Sid,
                        FNrc: data.Sid,
                        MNrc: data.Sid,
                        SImage: null
                    });
                    console.log("state is=>",this.state);
                }
                else this.setState(data);
            })
        }
    }

    goToProfileList = () => {
        this.props.history.location.pathname = undefined;
        this.props.history.push('/profile');
    }

    save = () => {
        if (this.state.Sid) {
            axios.put(api, this.state).then(a =>
                this.goToProfileList()
            );
        }
        else {
            axios.post(api, this.state).then(a =>
                this.goToProfileList()
            );
        }
    }

    delete = () => {
        console.log("this.state is=>", this.state);
        axios.delete(api, {
            data:
                { data: this.state.Sid }
        }).then(a =>
            this.goToProfileList()
        );
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        }
    }

    render() {
        var del = this.state.Sid ? <i className="fa fa-trash n-button" style={{ 'fontSize': '40px', 'color': 'red' }} onClick={() => this.delete()}></i> : '';
        return (
            <div className="entry-margin">
                <div style={{ "height": '50px' }}>
                    <i className="fa fa-save n-button" style={{ 'fontSize': '40px', 'color': 'green' }} onClick={() => this.save()}></i>
                    <i className="fa fa-ban n-button" style={{ 'fontSize': '40px', 'color': 'gray' }} onClick={() => this.goToProfileList()}></i>
                    {del}
                </div>
                <div className="row text-align-left">
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="name">Name</label><br />
                        <input className="entry-input" name="Name" value={this.state.Name} onChange={this.changeHandler} id="name"></input>
                    </div>
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="nrc">Nrc No</label><br />
                        <input className="entry-input" name="Nrc" value={this.state.Nrc} onChange={this.changeHandler} id="nrc"></input>
                    </div>
                </div>
                <div className="row text-align-left">
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="mname">Mother Name</label><br />
                        <input className="entry-input" name="MName" value={this.state.MName} onChange={this.changeHandler} id="mname"></input>
                    </div>
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="fname">Father Name</label><br />
                        <input className="entry-input" name="fName" value={this.state.fName} onChange={this.changeHandler} id="fname"></input>
                    </div>
                </div>
                <div className="row text-align-left">
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="mname">Phone No</label><br />
                        <input className="entry-input" name="Pno" value={this.state.Pno} onChange={this.changeHandler} id="mname"></input>
                    </div>
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="nrc">Address</label><br />
                        <input className="entry-input" name="Address" value={this.state.Address} onChange={this.changeHandler} id="nrc"></input>
                    </div>
                </div>
                <div className="row text-align-left">
                    <div className="col-sm-6 mj-top">
                        <label htmlFor="mname">Religion</label><br />
                        <input className="entry-input" name="Religion" value={this.state.Religion} onChange={this.changeHandler} id="mname"></input>
                    </div>
                    <div className="col-sm-6 mj-top">
                        <img className="img-thumbnail" alt="Item" src={this.state.SImage} style={{ "width": "200px" }} /><br /><br />
                        <input type="file" style={{"width" : "105px"}} onChange={this.handleChange} /><br />
                        {/* <div className="upload-btn">Upload</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileEntry
