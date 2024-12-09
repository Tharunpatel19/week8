const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("hello world anand");
}
};
app.listen(5000,()=>{
  console.log("server is at 5000");
});
