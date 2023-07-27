export async function handler(req,res){

    if(!req.body){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{

        if(req.method === "GET"){
            
            

        }else{
            res.status(405).json({message:"Method not allowed"})
        }
        
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong"})
    }
}