 // inputa ulaş
        //  buttona ulaş
        //  ul ulaş
        const textInputDOM = document.getElementById("todo-input");
        const btnAddTodoDOM = document.getElementById("todo-button");
        const todosList = document.querySelector("#todosli");
        const btnClearTodo = document.getElementById("clear")
        const todoFilter = document.querySelector(".filter-todo")
        // alerts
        const alertWarning= document.querySelector(".alert-warning")
        const alertSuccess= document.querySelector(".alert-success")
  
      // =====================================================================================================  


class Storage{
        static addTodoStorage(todosli){
         let storage = localStorage.setItem("todo", JSON.stringify(todosli))
         return storage;
        }
        static getStorage () {
         let storage = localStorage.getItem("todo") === null ? [] : JSON.parse(localStorage.getItem("todo"));
         return storage;
        }
  }
 
let todosli = Storage.getStorage();
 


btnAddTodoDOM.addEventListener("click",function(e){
            e.preventDefault();
            let id = todosli.length + 1 ;
            let title = textInputDOM.value;
            const todo = new Todo(id,title)
            todosli.unshift(todo);
            UI.alert("Todo eklendi.")
            UI.clearInput();
            UI.displayTodo();
            // add to localStorage
            Storage.addTodoStorage(todosli)
        })



class Todo {
    constructor(id,title){
        this.id=id;
        this.title=title;
    }
 }




class UI{
       static displayTodo() {
          let result ="";
          
           if(todosli.length === 0 ){
            todosList.innerHTML="Liste Boş!"

           }

           else{
            todosli.forEach((item) => {
              result += `
           
          <li
          
            class="flex justify-between border-double border-4 border-indigo-900 rounded-mdr px-4 py-3 flex bg-black text-white  "
          >
          <div class="todo">
              <button class="completed-btn"><i class="fas fa-check-circle text-green-500 text-2xl"></i></button>
            </div>
            <span>  ${item.title}</span>
            <button class="remove"  data-id="${item.id}" >Sil</button>
  
          </li>  

              `;
            });
            todosList.innerHTML =result;
       }
    }
      static removeTodo(){
        todosList.addEventListener("click", function(e) {

             if(e.target.classList.contains("remove")){
                e.target.parentElement.remove();
                let btnId = e.target.dataset.id;
                UI.removeLiTodo(btnId);
             }
        })
      }
      static removeLiTodo(id){
        todosli = todosli.filter((item ) => item.id !== +id);
        Storage.addTodoStorage(todosli)
        UI.alert("Todo Silindi")
        UI.displayTodo();
          
      }
       static clearInput(){
        textInputDOM.value="";

    }
       static clearTodo() {
         btnClearTodo.addEventListener("click", function(){
             todosli = [];
             Storage.addTodoStorage(todosli)
             UI.displayTodo()
             UI.alert("liste Temizlendi!")
         })
       }
       static alert(text){
          window.alert(text);
       }
 }

 
 window.addEventListener("DOMContentLoaded",function(){
    UI.removeTodo()
    UI.displayTodo()
    UI.clearTodo()
 })





















































                                                    //    OLD SCRİPT

                  //    input içindeki değeri(value ) değiştirmek için addEventListener kullan 
//         textInputDOM.addEventListener("change", function (event) {
//           textInputValue = event.target.value;
//         });
//                       //   butona tıklama listeye eklemek için addEventListener kullan ve input içini sıfırlamak için fonksiyon yaz
  
//   //  ============================================================================================================
  
//               //    burda click olduğunda bu fonksiyon çalışsın demektir
//     // EVENTS          
//            btnAddTodoDOM.addEventListener("click", addTodo);
//           btnClearTodos.addEventListener("click",clearTodos)   
//            todoFilter.addEventListener("click", filterTodo)                                    
//   // ==============================================================================================================
  
//         function addTodo(e) {
//               // her liste eklemesinde sayfa yenilenmesini önlemek için bunu kullan
//           e.preventDefault();
//                                     //  boş input veya dolu input için bildiri gönder 
//           const isEmpty = str => !str.trim().length;
  
//           alertWarning.style.display="block";
  
//           if(isEmpty(textInputDOM.value)){
//             setTimeout(() => {
//           alertWarning.style.display="none";
               
//             }, 1500);
      
//           }
//              else{
//           alertWarning.style.display="none";
//           alertSuccess.style.display="block";
  
//               setTimeout(() => {
//           alertSuccess.style.display="none";
               
//             }, 1500);  
//              };
  
//           saveLocal(textInputValue.value)
  
  
  
//            //  inputa değer verip ekleyince inputu sıfırla 
//            textInputDOM.value = "";
  
//           //   unshift ile liste başına ekle her eklendiğinde 1 arttır
//           todosli.unshift({ id: todosli.length + 1, todoTitle: textInputValue });
       
//           // her ekledğimizde çağıralım aşığıdaki fonksiyonu burda çağrıyoruz
//           displayTodos();
  
//         }
  
//   //   ==================================================================================================================
  
//                   // //    inputa verdiğimiz değerleri liste yapabilmek için bu fonksiyon unutma
//         function displayTodos() {
             
//           let result = "";
//                                       //    eğer liste array 0 eşit ise liste boş yazsın değil ise aşagıdaki fonksyion çalışsın
//            if(todosli.length === 0 ){
//             todosList.innerHTML="Liste Boş!"
//            }else{
  
//                                   // foreach ile addTodo foksiyonuna girilen değerleri döndürmek için result değişkenine ata
//                                   todosli.forEach((item) => {
//               result += `
           
//           <li
          
//             class="flex justify-between border-double border-4 border-indigo-900 rounded-mdr px-4 py-3 flex bg-black text-white  "
//           >
//           <div class="todo">
//               <button class="completed-btn"><i class="fas fa-check-circle text-green-500 text-2xl"></i></button>
//             </div>
//             <span>  ${item.todoTitle}</span>
//             <button   onclick="deleteTodo(${item.id})"><i class="fa fa-minus-circle text-2xl text-red-500 "></i></button>
  
//           </li>
              
//               `;
//             });
//                                       //  ulaştımız ul içerisine ekleyebilmemiz için innerHTML kullanırız ve result atarız            
//                                       todosList.innerHTML = result;
//            }
  
//           }
//   // ===============================================================================================
//   // filter
//     function filterTodo(e){
//       const todos = todosList.childNodes;
//       todos.forEach(function(item){
//         switch (e.taget.value) {
//           case "all":
//             item.style.display="flex"
                    
//             break;
//             case "comlated":
//               if(item.classList.contain("comlated")){
//                 item.style.display="flex"
//               }else{
//                 item.style.display="none"
//               }
//             break;
//             case "uncomlated":
//               if(!item.classList.contain("complated")){
//                 item.style.display="flex"
//               }else{
//                 item.style.display="none"
//               }
//               break
//         }
//       })
//     }
  
//     //  ============================================================================================       
//                                                         // todo list öğe silmek iiçin
//              function deleteTodo(id) {
//                let deletedId;
  
//                for(let i in todosli  ){
//                   if(todosli[i].id == id){
//                       deletedId = i;
//                   }
//                }
//                todosli.splice(deletedId, 1)
//            displayTodos();
                 
//              }
  
//               function clearTodos () {
//                 todosli.splice(0,todosli.length);
//                   displayTodos();
//               }
  
              
//            displayTodos();
  
  
//              // ============================================================
//           // save localStorage
  
//     function saveLocal (todo ) {
//       let todos;
//       if(localStorage.getItem("todos") === null ){
//         todos = [];
//       }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//       }
     
//       todos.push(todo)
//       localStorage.setItem("todos", JSON.stringify(todos))
//     }
  
//     function getTodos(){
//       let todos = [];
//       if(localStorage.getItem("todos") === null ){
//         todos = [];
//       }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//       }
//     }
  
//     function removeLocalStorage(todo){
//       let todos;
//       if(localStorage.getItem("todos") === null ){
//         todos = [];
//       }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//       }
//       const todoIndex = todo.children[1].innerText;
//     }
  