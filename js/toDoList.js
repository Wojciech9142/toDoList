{
    const tasks = [
        {
            content: "zrobić kawę",
            done: false,
        },
        {
            content: "zrobić kanapki",
            done: true,
        },
    ];


    const render = () => {
        let htmlString = "";

        for(const task of tasks){
            htmlString += `
            <li class="toDoList__list--item" ${task.done ? " style=\"text-decoration:line-through\"" : ""}>
                <button ${task.done ? " class=\"toggleTask toggleTask--ok js-toggleTask\"" : "class=\"toggleTask js-toggleTask\""} > </button>
                <p class="taskDescription">${task.content}</p>
                <button class="removeTask js-removeTask"> </button>
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-removeTask");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            })
        });

        const toggleButtons = document.querySelectorAll(".js-toggleTask");

        toggleButtons.forEach((toggleButton, index) => {
            toggleButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                render();
            })
        });
    }

    const addTask = (inputElement) => {
        tasks.push({
            content: inputElement
        });

        render();

        document.querySelector(".js-formInput").value = "";
        document.querySelector(".js-formInput").focus();
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();

        const inputElement = document.querySelector(".js-formInput").value.trim();
        
        if(inputElement === ""){
            return
        }

        addTask(inputElement);
    }

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
        render();
    }
    init();
}
