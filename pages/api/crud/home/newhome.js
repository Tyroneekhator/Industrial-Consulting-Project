import House from "../../../../lib/schema/Houses"
export default async function handler(req,res){
    let home = await House.create(req.body)
   await home.save()
   res.status(201).json({message:"successfully created"})
}
