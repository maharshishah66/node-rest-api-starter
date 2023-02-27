const totalVotersRaw = require('./totalVotersRaw')

let runningRequests = new Map()

async function totalVotersBatch(region) {
    if(runningRequests.has(region)){
        console.log("Batching request");
        return runningRequests.get(region)
    }

    let resultPromise = totalVotersRaw(region);
    runningRequests.set(region, resultPromise)
    resultPromise.finally(() => {
        runningRequests.delete(region)
    })

    return resultPromise;
}

module.exports = totalVotersBatch