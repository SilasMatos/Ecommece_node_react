import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import api from "../../../Services/Api";
const UpdateUser = () => {
    const [userData, setUserData] = useContext(UserContext);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await api.get(`/api/user/${user_id}`);
      const { name, email, phone, location } = response.data;
      setName(name);
      setEmail(email);
      setPhone(phone);
      setLatitude(location.coordinates[1]);
      setLongitude(location.coordinates[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      password,
      phone,
      latitude,
      longitude
    };

    try {
      const response = await api.put(`/api/user/${user_id}`, updatedUser, {
        headers: {  auth: `${userData._id}`  }
      });
      console.log(response.data); // Você pode tratar a resposta conforme necessário
      navigate('/users'); // Navegue para a página de usuários após a atualização
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
