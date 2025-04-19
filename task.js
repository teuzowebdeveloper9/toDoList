// task.js
let counter = 0;
let input = document.getElementById("inpuTask");
let button = document.getElementById("btn-add");
let main = document.getElementById("main");
let toDelete = document.getElementsByClassName("deleteThis");

function addTask(){
    ++counter;

    let task = input.value
  
    if((task !== "") && (task !== null) && (task !== undefined)){
        let newItem = ` <div onclick="toMark(${counter})"  id="${counter}" class="itens">
            <div onclick="toMark(${counter})" class="icon-item">
              <img src="images/radio_button_unchecked_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.png" alt="noCheck">
            </div>
            <div onclick="toMark(${counter})" class="name-item">
              ${task}
            </div>
            <div class="botao-item">
              <button onclick="cancel(${counter})" class="delete">  <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/> delete </button>
            </div>
          </div>      `;
          main.innerHTML += newItem;
          // Limpa o campo de input após adicionar a tarefa
            
            task = input.value = "";
            task.focus();

    };

};

input.addEventListener("keydown", function(event) {    
    if (event.key === "Enter") {
        event.preventDefault(); // Previne o comportamento padrão (se necessário)
        addTask(); // Chama a função para adicionar a tarefa
    }
});

function cancel(position){
    let task = document.getElementById(position);
    task.remove();
}

function toMark(position) {
    let item = document.getElementById(position);
    let state = item.classList.contains("clicado"); 
    let icon = item.querySelector(".icon-item img");


    if (state) {
        
        item.classList.remove("clicado");
        icon.src = "images/radio_button_unchecked_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.png";
    } else {
       
        item.classList.add("clicado");
        icon.src = "images/check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png"
    }
}