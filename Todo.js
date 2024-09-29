// const prompt = require("prompt-sync")({ sigint: true });

                                              // code 1 logical error.

// let todotasks = [
//   "Quit",
//   "quit",
//   "list",
//   "List",
//   "add",
//   "Add",
//   "delete",
//   "Delete",
// ];
// let todolist = [];
// let task = prompt("Enter the Task for To-Do List : ");
// for(let i of todotasks){
//   if(task!=i){
//       console.log("Sir Please Enter A Valid Tasks.");
//       console.log("-------------------------------");
//       console.log("The Options are :- ");
//       console.log("1.Quit");
//       console.log("2.List");
//       console.log("3.Add");
//       console.log("4.Delete");
//       console.log("-------------------------------");
//       console.log();
//       console.log("If You Want to Exit The Program Just Simply write Quit.");
//       console.log();
//       console.log("Thank You For Using The Program Sir.☺️");
//       console.log();
//       task = prompt("Enter the Task for To-Do List : ");
//     }else{
//       while (true) {
//         if (task == "quit" || task == "Quit") {
//           console.log("-------------------------------");
//           console.log();
//           console.log("Quit The Todo List : ");                                         // Quit.
//           console.log();
//           console.log("-------------------------------");
//           break;
//         }

//         if (task == "list" || task == "List") {
//           console.log("-------------------------------");
//           console.log("Here is the List Sir.");
//           console.log();
//           if(todolist.length==0){
//             console.log("The List is empty sir....");
//           }
//           for (let i of todolist) {
//             console.log(i);                                                             // Display List.
//           }
//           console.log();
//           console.log("-------------------------------");
//         } 

//         else if (task == "add" || task == "Add") {
//           console.log("-------------------------------");
//           // todolist.push(prompt("Enter the work sir :"));
//           let add = prompt("Enter the work sir :"); // Add the Task to the list.
//           todolist.push(add);
//           console.log();                                                                // Add To The Task.
//           console.log(add + " : This Task Added Successfully Sir");
//           console.log();
//           console.log("-------------------------------");
//         } 

//         else if (task == "delete" || task == "Delete") {
//           console.log("-------------------------------");
//           // console.log(todolist.pop())
//           console.log();
//           let task2 = todolist.pop();                                                   //Delete The Task.
//           console.log(task2 + " : This Task Deleted Successfully Sir");
//           console.log();
//           console.log("-------------------------------");
//         }

//         task = prompt("Enter the Task for To-Do List : ");                              //Base case to end the loop.
//       }
//     }
//   }

                                      // code 2 true but i dont want that much simple or brute force approach.

  // if (
//   task != "quit" ||
//   task != "Quit" &&
//   task != "list" ||
//   task != "List" &&
//   task != "add" ||
//   task != "Add" &&
//   task != "delete" ||
//   task != "Delete"
// ){
//   console.log("Sir Please Enter A Valid Tasks.");
//   console.log("-------------------------------");
//   console.log("The Options are :- ");
//   console.log("1.Quit");
//   console.log("2.List");
//   console.log("3.Add");
//   console.log("4.Delete");
//   console.log("-------------------------------");
//   console.log();
//   console.log("If You Want to Exit The Program Just Simply write Quit.");
//   console.log();
//   console.log("Thank You For Using The Program Sir.☺️");
//   console.log();
//   task = prompt("Enter the Task for To-Do List : ");
// }
// }
// console.log(task);
// while (true) {


//   if (task == "quit" || task == "Quit") {
//     console.log("-------------------------------");
//     console.log();
//     console.log("Quit The Todo List : ");                                         // Quit.
//     console.log();
//     console.log("-------------------------------");
//     break;
//   }


//   if (task == "list" || task == "List") {
//     console.log("-------------------------------");
//     console.log("Here is the List Sir.");
//     console.log();
//     if(todolist.length==0){
//       console.log("The List is empty sir....");
//     }
//     for (let i of todolist) {
//       console.log(i);                                                             // Display List.
//     }
//     console.log();
//     console.log("-------------------------------");
//   } 


//   else if (task == "add" || task == "Add") {
//     console.log("-------------------------------");
//     // todolist.push(prompt("Enter the work sir :"));
//     let add = prompt("Enter the work sir :"); // Add the Task to the list.
//     todolist.push(add);
//     console.log();                                                                // Add To The Task.
//     console.log(add + " : This Task Added Successfully Sir");
//     console.log();
//     console.log("-------------------------------");
//   } 


//   else if (task == "delete" || task == "Delete") {
//     console.log("-------------------------------");
//     // console.log(todolist.pop())
//     console.log();
//     let task2 = todolist.pop();                                                   //Delete The Task.
//     console.log(task2 + " : This Task Deleted Successfully Sir");
//     console.log();
//     console.log("-------------------------------");
//   }

//   task = prompt("Enter the Task for To-Do List : ");                              //Base case to end the loop.
  // if (
//   task != "quit" ||
//   task != "Quit" &&
//   task != "list" ||
//   task != "List" &&
//   task != "add" ||
//   task != "Add" &&
//   task != "delete" ||
//   task != "Delete"
// ){
//   console.log("Sir Please Enter A Valid Tasks.");
//   console.log("-------------------------------");
//   console.log("The Options are :- ");
//   console.log("1.Quit");
//   console.log("2.List");
//   console.log("3.Add");
//   console.log("4.Delete");
//   console.log("-------------------------------");
//   console.log();
//   console.log("If You Want to Exit The Program Just Simply write Quit.");
//   console.log();
//   console.log("Thank You For Using The Program Sir.☺️");
//   console.log();
//   task = prompt("Enter the Task for To-Do List : ");
// }




// let todolist = [];
// let task = prompt("Enter the Task for To-Do List : ");
//     while (true) {
//       if (task == "quit" || task == "Quit") {
//         console.log("-------------------------------");
//         console.log();
//         console.log("Quit The Todo List : ");                     // Quit.
//         console.log();
//         console.log("-------------------------------");
//         break;
//       }
      
//       if (task == "list" || task == "List") {
//         console.log("-------------------------------");
//         console.log("Here is the List Sir.");
//         console.log();
//         if (todolist.length == 0) {
//           console.log("The List is empty sir....");
//         }
//         for (let i of todolist) {
//           console.log(i);                                       // Display List.
//         }
//         console.log();
//         console.log("-------------------------------");
//       } else if (task == "add" || task == "Add") {
//         console.log("-------------------------------");
//         // todolist.push(prompt("Enter the work sir :"));
//         let add = prompt("Enter the work sir :"); // Add the Task to the list.
//         todolist.push(add);
//         console.log();                                          // Add To The Task.
//         console.log(add + " : This Task Added Successfully Sir");
//         console.log();
//         console.log("-------------------------------");
//       } else if (task == "delete" || task == "Delete") {
//         console.log("-------------------------------");
//         // console.log(todolist.pop())
//         console.log();
//         let ind=prompt("Enter the Task Index");
//         todolist.splice(ind,1);
//         // let task2 = todolist.pop();                               //Delete The Task.
//         console.log(task2 + " : This Task Deleted Successfully Sir");
//         console.log();

//         console.log("-------------------------------");
//       }
//       task = prompt("Enter the Task for To-Do List : ");           //Base case to end the loop.
// }



//      dynamic programming work .




//Access input.
input = document.querySelector("input");
ul=document.querySelector("ul");
// buttons property.
delul=document.querySelector('#delul');

//Access Add Button.
Add=document.querySelector("#Add");
Add.addEventListener("click", function () {
  console.log("Add is Clicked!","Value is : ",input.value);
    li=document.createElement('li');
    li.innerHTML = input.value;
    // ul.appendChild(li);
    //create a button buddy and append it inside the li items.
    let DelBtn=document.createElement("button");
    DelBtn.innerText="Delete";
    DelBtn.classList.add("delete");
    
    clonedLi=li.cloneNode(true);
    //Append the delete button with cloned list items.
    clonedLi.appendChild(DelBtn);
    delul.appendChild(clonedLi);
    input.value="";
});

delul.addEventListener("click",function(event){
  if(event.target.nodeName="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  }
})


//1.access the value inside the input of html.          // List.
//2.put the value inside the list. 



// List=document.querySelector("#List");
// List.addEventListener("Click",function(){
//   console.log("List Item Are : ",List.value);
// });

// List.value=input.value;

// button 