const employee=[{ name: 'David Carlson', age: 30 },
                { name: 'John Cena', age: 34 },
                { name: 'Mike Sheridan', age: 25 },
                { name: 'John Carte', age: 50 }];
           
var a=employee.filter(function(e,d){
    if(d%2!=0){
        var c= `${e.name}+${e.age}`
    }
    return c;
    
})  
document.write(JSON.stringify(a));              

