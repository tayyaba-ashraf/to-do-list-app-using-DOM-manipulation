/** target elements that we have to traverse and perform actions on them */

/**we are targetting ul->(todosList) and then form which consisting on input and then search feild */
const todosList=document.querySelector(".todos");
const addForm=document.querySelector(".addForm");
const searchListForm=document.querySelector(".searchListForm")

/**following event listner will handle form submission when we will add todo item */
addForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    const todoName=addForm.addTodo.value;
    if(todoName.length){
        addtodoIntoTodosList(todoName);
        addForm.reset();

    }

})

/*******Adding toDo functionality */

/**function containing instructions to add todo item in todos list */
const addtodoIntoTodosList=(todoName)=>{
const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
 <span>${todoName}</span>
  <i class="far fa-trash-alt delete"></i>
 </li>`

 todosList.innerHTML+=html;
}

/*******Deleting toDo functionality */

/**Remove todo from todos list */
todosList.addEventListener('click',(e)=>{
    /**target's child <i>icon contains delete class */
    /**As we have to delete whole list item li,so we will write parentElement */
    /**so by clicking li's i(icon) parentElement  li will be deleted*/
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
})

/*******searching toDo functionality */
searchListForm.addEventListener('keyup',()=>{
    /**filteredTerms will contain those lists items name that we have to display */
    const filteredTerm=searchListForm.search.value.trim().toLowerCase();
    filterdTodos(filteredTerm);
})

const filterdTodos=(filteredTermName)=>{
//console.log(filteredTermName);

/**following will convert HTML collection of li items to array */
const listArray=Array.from(todosList.children);

/** we will filter those list items which not containing the term written in search*/
/**and then will iterate that array obtained by filter... using  forEach loop and will hide them*/
const itemsNotRequiredToDisplay=listArray.filter((filteredTodo)=>{
    if(!filteredTodo.textContent.toLowerCase().includes(filteredTermName)) {
        return true;
    }
    else{
        return false;
    }
})
itemsNotRequiredToDisplay.forEach((removeOnlyList)=>{
    removeOnlyList.classList.add('notRequiredtodos')
});

/** we will filter those list items which  containing the term written in search*/
/**and then will iterate that array obtained by filter... using  forEach loop and will display them*/
const itemsRequiredToDisplay=listArray.filter((filteredTodo)=>{
    if(filteredTodo.textContent.toLowerCase().includes(filteredTermName)) {
        return true;
    }
    else{
        return false;
    }
})
itemsRequiredToDisplay.forEach((showOnlyList)=>{
    showOnlyList.classList.remove('notRequiredtodos')
});


}