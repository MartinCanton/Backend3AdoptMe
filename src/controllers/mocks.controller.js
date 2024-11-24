
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
    const users = parseInt(req.query.users) || 50;
    const pets = parseInt(req.query.pets) || 50;
    
    try {
        const mockeUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        const insertedUsers = await users.usersService.insertMany(mockeUsers);
        const insertedPets = await petsService.insertMany(mockPets);
        res.status(201).json({
            message: `Data succesfly: Users:${insertedUsers.length}, Pets:${insertedPets.length}`,
            status: 'success',
            payload: {
                usersInserted: insertedUsers.length,
                petsInserted: insertedPets.length
            }
        })

       
    } catch (error) {
        res.status(500).json({ error: 'Error Data'})
    }
 }

 export default {
    getMockPets,
    getMockUsers,
    generateData
 }