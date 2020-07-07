const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var contactList=[
    {
        name:'Sodeep',
        phone:"100"
    },
    {
        name:"expnoob",
        phone:"1000"
    },
    {
        name:'lollll',
        phone:"101"
    },

]
app.get('/',function(req,res){
    
    return res.render('home',{
        title:"Contact list",
        contact_list:contactList
    });
});
app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});
app.post('/create-contact', function(req, res){
    return res.redirect('/practice');
});


app.listen(port,function(err){
    if(err){console.log('ERROR',err);
}
    console.log('running',port)
});