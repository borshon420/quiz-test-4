import React, { ChangeEvent, FormEvent, useState } from 'react';
import {Button, MenuItem, TextField} from '@mui/material';
import { useHistory } from 'react-router-dom';

export interface UserInfo {
    name: string;
    gender: string;
    lang: string;
}

const Home: React.FC = () => {

    const history = useHistory();

    const [user, setUser] = useState<UserInfo>({
        name: "",
        gender: "",
        lang: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        history.push("/exam", user);
    }
    return (
        <div data-testid="home">
          <h2>Online MCQ</h2> 
          <form onSubmit={handleSubmit}>
          <div>
            <TextField
                value={user.name}
                name="name"
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Your Name"
                sx={{width: "25%", mb: 3}}
             />    
          </div> 
          <div>
              <TextField
                select
                label="Select Gender"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                sx={{width: "25%", mb: 3, textAlign: "left"}}
              >
                  <MenuItem key="Male" value="Male">
                      Male
                  </MenuItem>
                  <MenuItem key="Female" value="Female">
                      Female
                  </MenuItem>
              </TextField>
          </div>
          <div>
              <TextField
                select
                label="Select Language"
                name="lang"
                value={user.lang}
                onChange={handleInputChange}
                sx={{width: "25%", mb: 3, textAlign: "left"}}
              >
                  <MenuItem key="ReactJS" value="ReactJS">
                  ReactJS
                  </MenuItem>
                  <MenuItem key="TypeScript" value="TypeScript">
                  TypeScript
                  </MenuItem>

              </TextField>
          </div>
          <Button variant="contained" sx={{width: "25%"}} size="large" type="submit">Submit</Button>
          </form>
        </div>
    );
};

export default Home;