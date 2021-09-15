var superman ={
  name: "Superman",
  power:"flight",
  costumecolor:"Blue",
  strength:10000,
  stealth:0
  };

  var batman ={
  name: "Batman",
  power:"martialarts",
  costumecolor:"Black",
  strength:100,
  stealth:100
  };
    var thor ={
  name: "Thor",
  power:"martialarts",
  costumecolor:"Black",
  strength:100000,
  stealth:0
  };
  //var superheroList={superman,batman,thor};
    var superheroList=[superman,batman,thor];
  //console.log(superheroList);
  for( var i=0;i<superheroList.length;i++)
  {
    console.log(superheroList[i].name+" "+superheroList[i].costumecolor);
  }


  
