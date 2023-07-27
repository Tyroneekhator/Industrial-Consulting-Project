import {compare} from "bcrypt"
import Users from "../../lib/schema/Users"
import dbConnect from "../../lib/dbConnect"
import Agency from "../../lib/schema/Agency"
import Homeowners from "../../lib/schema/Homeowners"

export default async function handler(req,res){

    await dbConnect()
    if(!req.query){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{
        
        if(req.method === "GET"){
            let user;
            if(req?.query?.role == "guest"){
                console.log("guest")
                user = await Users.create({
                    firstName: req?.query?.firstName,
                    email: req?.query?.email,
                    password: req?.query?.password,
                    lastName: req?.query?.lastName,
                    delegated: req?.query?.delegate      
                })  
                await user.save()
   
                if(user instanceof Users){
                    console.log(user)
                    res.status(201).json(user)
                    return
                }              
            }
            if(req?.query?.role == "homeowner"){
                user = await Homeowners.create({
                    fullName: req?.query?.firstName + " " + req?.query?.lastName,
                    houses: null,
                    email: req?.query?.email,
                    password: req?.query?.password,
                    houseOwner: 1,
                })
                await user.save()
   
                if(user instanceof Homeowners){
                    console.log(user)
                    res.status(201).json(user)
                    return
                }
            }
            if(req?.query?.role == "agency"){
                console.log("agency")
                user = await Agency.create({
                    agencyName: "Save Trees",
                    fullName: req?.query?.firstName + " " + req?.query?.lastName,
                    role: "admin",
                    email:req?.query?.email,
                    password: req?.query?.password,    
                })
                await user.save()
              
                if(user instanceof Agency){
                   
                    res.status(201).json(user)
                    return
                }
            }
           
            res.status(400).json({message:"Bad request"})
            return
        }else{
            res.status(405).json({message:"Method not allowed"})
        }
        
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong"})
    }
}