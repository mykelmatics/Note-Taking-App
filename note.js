const noteInput = document.querySelector(".noteinput")
const noteList = document.querySelector(".notelist")

//const li = document.querySelector('li')
var eachNote = document.createElement('LI')



let id = null;


noteList.style.display = "flex"
noteList.style.flexDirection = "column"
const addbutton = document.querySelector(".addnote")
let notesArray = [];
const savedNotes = JSON.parse(localStorage.getItem('notes'));

if (savedNotes) {
  notesArray = savedNotes;
}
//localStorage.setItem('no tes', JSON.stringify(notesArray))
for (let i = 0; i < notesArray.length; i++ ) {
  const value = savedNotes[i];

  const eachNote = document.createElement('LI')
   // value = noteInput.value;
  

  const span = document.createElement('div') ;
  // reload(value);

  // function(value)
  span.innerHTML = value
  span.setAttribute('id',`separate-note-${noteList.childElementCount}`)
  // span.style.display = 'inline-block'
  span.style.width = '70%'
  // prepare note content
  const noteContent = span;

  const editbutton = document.createElement('button');
  editbutton.innerHTML = 'EDIT'
  editbutton.className = 'edit'
  editbutton.setAttribute("id", noteList.childElementCount);
  editbutton.style.height = '30px'
  editbutton.style.width = '60px'
  editbutton.style.color = 'white'
  editbutton.style.backgroundColor = 'green'
  editbutton.style.border = 'none'
  editbutton.style.borderRadius ='3px'
  editbutton.addEventListener ('click',function(event){
    event.preventDefault()
    // console.log(event.target, '====>')
    
  if(event.target.textContent === 'EDIT') {
    addbutton.textContent = 'UPDATE '   
    id = 'separate-note-'+ event.target.id;
    const noteid = document.getElementById(id);
  //  console.log('seperate-note-'+ event.target.id)
 
    noteInput.value = noteid.textContent   
    // noteInput.value = noteList.children[event.target.id].textContent

    // console.log(noteList.children[event.target.id].textContent)
  }
}
  
  );



        const deletebutton = document.createElement('button');
        deletebutton.innerHTML = 'DELETE'
        deletebutton.className = 'delete'
        const deletid = `delete-note-${noteList.childElementCount}` 
        deletebutton.setAttribute("id", deletid);
        deletebutton.style.marginLeft = '3px';
        deletebutton.style.height = '30px';
        deletebutton.style.background ='red';
        deletebutton.style.color = 'white';
        deletebutton.style.border = 'none';
        deletebutton.style.borderRadius = '3px'

        deletebutton .addEventListener ('click',function(event){
        if(event.target.textContent === 'DELETE')
        {if (confirm('Do you want to delete the Note')) {
        const li = event.target.parentElement
        const ol= li.parentNode
         ol.removeChild(li);
        const splitdel = deletid.split("-")
        console.log(splitdel)
        notesArray.splice(parseInt(splitdel[2]),1)
        localStorage.setItem("notes", JSON.stringify(notesArray))

          }
        }

        });
         const generatecount = noteList.childElementCount + 1

        const notecount = document.createElement('span');
        notecount.innerHTML = `${generatecount}.`
        notecount.style.marginRight = '10px';
        notecount.style.marginLeft = '-10px';
       

        // add all prepared data
        eachNote.appendChild(notecount)
        eachNote.appendChild(noteContent);
        eachNote.appendChild(editbutton);
        eachNote.appendChild(deletebutton);  

       //localStorage.setItem("eachNote", eachNote.textContent)
        

        // add note to list.
        noteList.appendChild(eachNote);
       // localStorage.setItem("noteList", JSON.stringify(noteList)) 

       // noteInput.value = '';
        
      //  licontent.remove();
    


  

};


addbutton.addEventListener("click", function() {
   if(noteInput.value == '') {
    alert(`Please write a Note`)
   }


     else {  
      if (id != null) {
 
        const editedElem = document.getElementById(id);
        console.log(editedElem)

        
        
        editedElem.textContent = noteInput.value;
        const splitid = id.split("-");
        console.log(splitid)

         notesArray[parseInt(splitid[2])] =  editedElem.textContent
        localStorage.setItem("notes", JSON.stringify(notesArray))

        noteInput.value = '';
        addbutton.textContent = 'ADD NOTE'

        id = null;
        
        
        return;
      }
              

        // create each note element
        
        const value = noteInput.value;
       

        const span = document.createElement('div') ;
        // reload(value);

        // function(value)
        span.innerHTML = value
        span.setAttribute('id',`separate-note-${noteList.childElementCount}`)
       // span.style.display = 'inline-block'
        span.style.width = '70%'
        // prepare note content
        const noteContent = span;
 
        notesArray.push(noteInput.value)
        localStorage.setItem("notes", JSON.stringify(notesArray))


        //#4CAF50
      //  console.logt)
        // prepare edit button
        const editbutton = document.createElement('button');
        editbutton.innerHTML = 'EDIT'
        editbutton.className = 'edit'
        editbutton.setAttribute("id", noteList.childElementCount);
        editbutton.style.height = '30px'
        editbutton.style.width = '60px'
        editbutton.style.color = 'white'
        editbutton.style.backgroundColor = 'green'
        editbutton.style.border = 'none'
        editbutton.style.borderRadius ='3px'
        editbutton.addEventListener ('click',function(event){
          event.preventDefault()
         // console.log(event.target, '====>')
         
        if(event.target.textContent === 'EDIT') {
         addbutton.textContent = 'UPDATE '   
         id = 'separate-note-'+ event.target.id;
         const noteid = document.getElementById(id);
        //  console.log('seperate-note-'+ event.target.id)
          noteInput.value = noteid.textContent  

         // noteInput.value = noteList.children[event.target.id].textContent

          // console.log(noteList.children[event.target.id].textContent)
        }
      }
        
        );



        // prepare Delete button 
        const deletebutton = document.createElement('button');
        deletebutton.innerHTML = 'DELETE'
        deletebutton.className = 'delete'
        const deletid = `delete-note-${noteList.childElementCount}`
        deletebutton.setAttribute("id", deletid);
        deletebutton.style.marginLeft = '3px';
        deletebutton.style.height = '30px';
        deletebutton.style.background ='red';
        deletebutton.style.color = 'white';
        deletebutton.style.border = 'none';
        deletebutton.style.borderRadius = '3px'

        deletebutton .addEventListener ('click',function(event){
        if(event.target.textContent === 'DELETE')
        {if (confirm('Do you want to delete the Note')) {
        const li = event.target.parentElement
        const ol= li.parentNode
         ol.removeChild(li);
        const splitdel = deletid.split("-")
        notesArray.splice(parseInt(splitdel[2]),1)
        localStorage.setItem("notes", JSON.stringify(notesArray))

          }
        }

        });

        const generatecount = noteList.childElementCount + 1

        const notecount = document.createElement('span');
        notecount.innerHTML = `${generatecount}.`
        notecount.style.marginRight = '10px';
        notecount.style.marginLeft = '-10px';
       

        // add all prepared data
        eachNote.appendChild(notecount)
        eachNote.appendChild(noteContent);
        eachNote.appendChild(editbutton);
        eachNote.appendChild(deletebutton);

        
        // add note to list.
        noteList.appendChild(eachNote);


        noteInput.value = '';
        
      //  licontent.remove();
    };
    
    
    }

    
);
