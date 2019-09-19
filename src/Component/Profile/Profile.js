import React, { Component } from 'react'

export class Profile extends Component {

    api = 'http://localhost:8080';
    state = { students: [], filterStudent: [] }

    componentDidMount() {
        this.getData();
    }

    setData(data) {
        this.setState({ students: data, filterStudent: data });
    }

    getData = () => {
        fetch(this.api + '/student').then(response => response.json()).then(data =>
            this.setData(data));
    }

    gotoEntry = (param) => {
        this.props.history.push(param);
    }

    dExcel = () => {
        console.log("Hello");
        fetch(this.api + '/studentcsv');
    }

    gotoEntryById = a => {
        this.props.history.push('profileEntry/' + a.Sid);
    }

    filter = (event) => {
        if (event) {
            this.setState({ filterStudent: this.state.students.filter(a => (a.Name + '¶œ' + a.fName + '¶œ' + a.MName + '¶œ' + a.Nrc + '¶œ' + a.Pno).toString().trim().toLowerCase().indexOf(event.target.value.toString().trim().toLowerCase()) !== -1) })
        }
    }

    render() {
        const student = this.state.filterStudent.map((a, index) =>
            <tr onClick={() => this.gotoEntryById(a)} key={a.Sid}>
                <td>{index + 1}</td>
                <td>{a.Name}</td>
                <td>{a.fName}</td>
                <td>{a.MName}</td>
                <td>{a.Pno}</td>
                <td>{a.Nrc}</td>
                <td>{a.Address}</td>
                <td>{a.Religion}</td>
            </tr>);

        return (
            <div style={{ 'margin': '0px 5px 5px 5px' }}>
                <div style={{ "height": '50px' }}>
                    <i onClick={this.dExcel} style={{ 'fontSize': '36px' }} className="fa fa-file n-button"></i>
                    <i onClick={() => this.gotoEntry('profileEntry')} style={{ 'fontSize': '40px' }} className="fa fa-plus-square n-button"></i>
                    <input className="search" onChange={this.filter} placeholder="Search"></input>
                </div>
                <div>
                    <table id='students'>
                        <thead>
                            <tr>
                                <th style={{ 'width': '50px' }}>No</th>
                                <th>Student Name*</th>
                                <th>Father Name*</th>
                                <th>Mother Name*</th>
                                <th>Phone No*</th>
                                <th>Nrc No*</th>
                                <th>Address</th>
                                <th>Religion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile






