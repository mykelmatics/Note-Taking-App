const noteInput = document.querySelector(".noteinput")
const noteList = document.querySelector(".notelist")
var remove = document.querySelector('.draggable');
var dragSrcEl = null;

//var eachNote = document.createElement('LI')



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
  const value = savedNotes[i].notecontent;

  const eachNote = document.createElement('LI');
  eachNote.setAttribute('id', `eachnote-${noteList.childElementCount}`)
  eachNote.draggable = true
  eachNote.className = 'draggable'
  // eachNote.addEventListener('drag', setDragging) 
  // eachNote.addEventListener('dragover', setDraggedOver)
 // eachNote.addEventListener('drop', compare) 
   // value = noteInput.value;
      

  const span = document.createElement('SPAN') ;
  // reload(value);

  // function(value)
  span.innerHTML = value
  span.setAttribute('id',`separate-note-${noteList.childElementCount}`)
  span.style.display = 'inline-block'
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
        //console.log(splitdel)
        notesArray.splice(parseInt(splitdel[2]),1)
        localStorage.setItem("notes", JSON.stringify(notesArray))

          }
        }

        });
        //  const generatecount = noteList.childElementCount + 1

        // const notecount = document.createElement('span');
        // notecount.innerHTML = `${generatecount}.`
        // notecount.style.marginRight = '10px';
        // notecount.style.marginLeft = '-10px';
       

        // // add all prepared data
        // eachNote.appendChild(notecount)
        eachNote.appendChild(noteContent);
        eachNote.appendChild(editbutton);
        eachNote.appendChild(deletebutton);  

        

        // add note to list.
        noteList.appendChild(eachNote);
        addEventsDragAndDrop(eachNote)
     


  

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
        const editsplitId = parseInt(splitid[2]);

       // console.log(splitid)
        for(i=0; i< notesArray.length; i++) {
          if(notesArray[i].id == editsplitId) {
            notesArray[i].notecontent = editedElem.textContent;
          }

        } 
        localStorage.setItem("notes", JSON.stringify(notesArray))

        noteInput.value = '';
        addbutton.textContent = 'ADD NOTE'

        id = null; 
        return;
      }
              

        // create each note element
        const eachNote = document.createElement('LI');
        eachNote.setAttribute('id', `eachnote-${noteList.childElementCount}` )
        eachNote.draggable = true;
        eachNote.className = 'draggable'
    
       

        const span = document.createElement('SPAN') 

        // function(value)
        span.innerHTML = noteInput.value
        span.setAttribute('id',`separate-note-${noteList.childElementCount}`)
        span.className = 'count'
        span.style.display = 'inline-block'
        span.style.width = '70%'
        // prepare note content
        const noteContent = span;
 
        notesArray.push({'notecontent':noteInput.value,'id': parseInt(`separate-note-${noteList.childElementCount}`.split("-")[2])})
        localStorage.setItem("notes", JSON.stringify(notesArray))
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
        
          noteInput.value = noteid.textContent  
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

            const splitdel = deletid.split("-");
           const splitdelInt = parseInt(splitdel[2])

         for (let i = 0; i < notesArray.length; i++) {
 
          if(notesArray[i].id == splitdelInt) {
             notesArray.splice(i,1)

           }
          localStorage.setItem("notes", JSON.stringify(notesArray))

         }
        

        
        

          }
        }
        

        }); 

        // const generatecount = noteList.childElementCount + 1


        // const notecount = document.createElement('span');
        // notecount.innerHTML = `${generatecount}.`
        // notecount.style.marginRight = '10px';
        // notecount.style.marginLeft = '-10px';
       

        // add all prepared data
        // eachNote.appendChild(notecount)
        eachNote.appendChild(noteContent);
        eachNote.appendChild(editbutton);
        eachNote.appendChild(deletebutton);

        
        // add note to list.
        noteList.appendChild(eachNote);
        addEventsDragAndDrop(eachNote)


        noteInput.value = '';
        
     
    };
    
    
    }

    
);
function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
  //const firstElementid = e.target.id.split("-")[1];
};
 
function dragEnter(e) {
  this.classList.add('over');
}
 
function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}
 
function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
 
function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
 
function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}
 
function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}
 
var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});
