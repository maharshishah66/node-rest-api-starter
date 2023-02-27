const axios = require('axios')

async function totalVotersRaw(region) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        let sum = 0;
        if(response && response.length){
            for(res of response){
                sum += 1;
            }
            return {sum};
        }

        return
    } catch (err) {
        console.error(err);
    }
    // return await new Promise((resolve) => setTimeout(() => resolve({region, total_voters: 100000}), 3000));
}
module.exports = totalVotersRaw;