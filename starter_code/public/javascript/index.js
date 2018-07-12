// const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

$('#fetch-all').click(function(){
  axios.get('https://ih-crud-api.herokuapp.com/characters')
  .then((listOfCharacters)=>{
    
    listOfCharacters.data.forEach((oneCharacter)=>{

      const newChar = `
      <div>
      <h5>Name: ${oneCharacter.name}</h5>
      <p>Occupation: ${oneCharacter.occupation}</p>
      <p>Weapon: ${oneCharacter.weapon}</p>
      </div>
      <hr>
      `

      $('#allCharacters-div').append(newChar);

    })
    });

});

$('#fetch-one').click(function(){

  const theID = $('#character-id').val();
  console.log(theID);
  
  axios.get('https://ih-crud-api.herokuapp.com/characters/'+theID)

  .then((oneCharacter)=>{
    const newChar = `
    <div>
    <h5>Name: ${oneCharacter.data.name}</h5>
    <p>Occupation: ${oneCharacter.data.occupation}</p>
    <p>Weapon: ${oneCharacter.data.weapon}</p>
    </div>
    `

    $('#allCharacters-div').append(newChar);
  })
  .catch((err)=>{
    console.log(err);
  })

});

$('#delete-one').click(function(){
  const deleteID = $('#character-id-delete').val();

  axios.get('https://ih-crud-api.herokuapp.com/characters/'+deleteID)

  .then((oneCharacter)=>{
    console.log(oneCharacter.data);
    // const newChar = `
    // <div>
    // <h5>Name: ${oneCharacter.data.name}</h5>
    // <p>Occupation: ${oneCharacter.data.occupation}</p>
    // <p>Weapon: ${oneCharacter.data.weapon}</p>
    // </div>
    // `
  
  $('#allCharacters-div').remove(oneCharacter);
})
.catch((err)=>{
  console.log(err);
})
})

// $('#send-data').click(function(){

//   const theName = $('#name').val();
//   const theOccupation = $('#occupation').val();
//   const theWeapon = $('#weapon').val();
// })



//   document.getElementById('fetch-all').onclick = function(){

//   }
  
  // document.getElementById('fetch-one').onclick = function(){
  //   const theID = document.getElementById('character-id').val;

  //   axios.get('https://ih-crud-api.herokuapp.com/characters'+Number(theID))

  //     .then((oneChar)=>{
  //       Number($('#character-id').val) = `
        
  //       <h3>${oneChar.name}</h3>
  //       <p>${oneChar.occupation}</p>
  //       <p>${oneChar.weapon}</p>
    
  //       `
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })

  // }
  
//   document.getElementById('delete-one').onclick = function(){
        
//   }
  
//   document.getElementById('edit-character-form').onsubmit = function(){
            
//   }
  
//   document.getElementById('new-character-form').onsubmit = function(){
                
//   }
})
