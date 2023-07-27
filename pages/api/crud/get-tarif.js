export default async function handler(req,res){
    if(!req.body){
        req.status(400).json({message:"Bad request, please try again"})
        return
    }
    try{
        if(req.method === "POST"){
            console.log(req.body)
            console.log(process.env.OCTOPUS_ENERGY)
            let data
            let buf = Buffer.from(process.env.OCTOPUS_ENERGY, 'utf8')
            if(!req.body.mpa){
                data = await fetch(`https://api.octopus.energy/v1/electricity-meter-points/${req.body.reading}/meters/${req.body.serialN}/consumption/`,{
                    headers:{"Authorization": `Bearer ${buf.toString("base64")}`}
                })
              
            }else{
                data = await fetch(`https://api.octopus.energy/v1/electricity-meter-points/2144919800/meters/${req.body.serialN}/consumption/`,{
                    headers:{"Authorization": `Bearer ${buf.toString("base64")}`}
                })
           
            }
            console.log(await data.json())
            console.log(data.headers)
            if(data.modifiedCount == 1){
                res.status(200).json(data)
                return
            }
            res.status(406).send({message:data})
    
        }else{
            res.status(405).json({message:"Method is not allowed"})
            return
        }
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Server is down/Unexpected error"})
    }

}