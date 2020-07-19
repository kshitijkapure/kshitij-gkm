import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TableView from "./components/TableView/TableView";
import axios from "axios";

function App() {

    const [allData, setAllData] = useState([]);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users=> {
                setAllData(users.data)
            })
    };

    useEffect(() => {
        let mounted = true;

        fetchData();
        return () => {
            mounted = false;
        };

    }, []);

    const deleteUser =(userId)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                var lists = allData.filter(x => {
                    return x.id !== userId;
                })
                setAllData(lists);
                alert("User Deleted Successfully!")
            })
    }

    const getFromData =(form)=>{
        axios.post(`https://jsonplaceholder.typicode.com/users`, { form })
            .then(res => {
                var newArray = allData;
                var newObj= {
                    id: res.data.id,
                    address:{
                        city: res.data.form.address.city
                    },
                    email: res.data.form.email,
                    name: res.data.form.name,
                    phone: res.data.form.phone,
                    username: res.data.form.username,
                    company:res.data.form.company,
                    website: res.data.form.website
                }
                newArray.push(newObj);
                setAllData(newArray);
                alert("User Creation Successfull");
            })
    }

    return (
        <div className="App">
            <CssBaseline />
            <Container fixed>
                <Form formData={getFromData}/>
                <TableView data={allData} deleteUser={deleteUser}/>
            </Container>
        </div>
    );
}

export default App;
