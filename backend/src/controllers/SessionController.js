const connection = require('../database/connection');


module.exports = { 
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();//indicativo semantico que só vem um (objeto simples) e não um (Array)

        if(!ong){ //!variavel se for nulo levanta excessao
            return response.status(400).json({error: 'No ONG found with this ID.'})
        }

        return response.json(ong);
    }
}