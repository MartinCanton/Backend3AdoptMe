
import {generateMockUsers, generateMockPets} from '../utils/mocking.js'
import { petsService, usersService } from "../services/index.js";

const getMockPets = (req, res) => {
    const pets = generateMockPets(50);
    res.send({ status: 'success', payload: pets });
};

 const getMockUsers = (req, res) => {
    const users = generateMockUsers(50);
    res.send({ status: 'success', payload: users });
 };

 const generateData = async (req, res) => {
    const { users, pets} = req.body;
    try {
        const mockeUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        await usersService.inserMany(mockeUsers);
        await petsService.inserMany(mockPets);

        res.send(201).json({ message: 'Succesfly Data'});
    } catch (error) {
        res.status(500).json({ error: 'Error Data'})
    }
 }

 export default {
    getMockPets,
    getMockUsers,
    generateData,
 }