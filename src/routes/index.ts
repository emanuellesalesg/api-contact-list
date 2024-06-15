import express from 'express';
import { getContacts, dataSource, createContact, deleteContact } from '../services/contact';

const router = express.Router();

router.post('/contato', async(req, res) => {
    const { name } = req.body;

    if(!name || name.length < 2){
        return res.json({error: 'ERROR: Needs 2 characters or more'});
    }

    let list = await getContacts();

    if(list){
        await createContact(name);

        res.status(201).json({contato: name});
    }
});

router.get('/contatos', async (req, res) => {
    let list = await getContacts();

    res.json({contatos: list});
});

router.delete('/contato', async (req, res) => {
    const { name } = req.query;

    if(!name){
        return res.json({error: 'ERROR: Need an input'});

    }

    await deleteContact(name as string);

    res.json({ contato: name });
});

export default router;