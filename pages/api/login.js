import {compare} from "bcrypt"
import Users from "../../lib/schema/Users"
import dbConnect from "../../lib/dbConnect"

export default async function handler(req,res){
    await dbConnect()
    console.log("I am in login")
    if(!req?.query){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{
        console.log("I am now in route with" + req.query.email)

        if(req.method === "GET"){
            
            const user = await Users.findOne({email:req?.query?.email})
            if(user){
                const matchPass = await compare(req?.query?.password, user?.password)

                if(matchPass){
                    console.log("Passed")
                    res.status(302).json(user)
                    return
                }
            }

            res.status(401).json({message:"Not authorized"})

        }else{
            res.status(405).json({message:"Method not allowed"})
        }
        
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong"})
    }
}