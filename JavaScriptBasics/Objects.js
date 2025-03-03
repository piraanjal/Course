const users =[{
    firstName:"Pranjal",
    gender :"Female"
},
{
    firstName:"Soumya",
    gender :"Female"
},
{
    firstName:"Parth",
    gender :"male"
}
]

for(let i=0;i<users.length;i++){
    if(users[i]["gender"] == "Female"){
        console.log(users[i]["firstName"]);
    }
}