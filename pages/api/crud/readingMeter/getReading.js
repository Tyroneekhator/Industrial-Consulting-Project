import Homeowners from "../../../../lib/schema/Homeowners"
export default async function handler(req,res){
    let home = await Homeowners.findOne(req.body.id)
    if(house){
       let reading = home.house.readings.uploadedBy(req?.body?.date)
       res.status(201).json({reading})
    }
    res.status(404).json({message:"house not found"})
 
   
}
