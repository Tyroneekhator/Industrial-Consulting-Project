import Homeowners from "../../../../lib/schema/Homeowners"
export default async function handler(req,res){
    let home = await Homeowners.findOne(req.body.id)
    if(house){
        home.house.readings.push(req.body.readings)
    }
    await house.save()
    
    res.status(201).json({message:"successfully created"})
}
