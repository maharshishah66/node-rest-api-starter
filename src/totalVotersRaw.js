async function totalVotersRaw(req, res) {
    const { region } = req.params
    await new Promise((resolve) => setTimeout(resolve, 2500))
    res.send({
        region,
        total_voters: 50000,
    })
}

module.exports = totalVotersRaw;