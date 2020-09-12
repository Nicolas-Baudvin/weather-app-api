const axios = require("axios");

exports.info = async (req, res) => {
    const { latLong } = req.body;
    console.log(latLong)
    try
    {
        const resp = await axios({
            url: `https://api.meteo-concept.com/api/ephemeride/1?latlng=${latLong.lat},${latLong.long}&token=${process.env.TOKEN}`,
            method: 'GET',
        });

        const daily = await axios({
            url: `https://api.meteo-concept.com/api/forecast/daily?token=${process.env.TOKEN}&latlng=${latLong.lat},${latLong.long}`,
            method: "GET"
        });

        res.status(200).json({ ok: "ok", ...resp.data, ...daily.data })
    } catch (e)
    {
        console.log(e);
        res.status(400).json({ err: "err", status: e.response?.status })
    }
};