const todoForm = document.getElementById("todoForm");
const inputValue = document.getElementById("inputValue");
const listContainer = document.getElementById("listContainer");

todoForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    
    if (inputValue.value === '') {
        inputValue.placeholder = "Please Enter A Task";
        inputValue.style.borderColor = "red";
        return;
    }

    listContainer.insertAdjacentHTML('beforeend',
        `
        <div class="listContainer col-3 d-flex justify-content-between mb-3">
            <h5 class="Task">${inputValue.value}</h5>
            <div class="checkAndDel">
                <i class="fa fa-check-circle check" aria-hidden="true"></i>
                <i class="fa fa-trash trash" aria-hidden="true"></i>
            </div>
        </div>
        `
    );

    inputValue.value = '';
    inputValue.style.borderColor = '';
});


listContainer.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("check")) {
        const checkBtn = ev.target;
        if (checkBtn.style.color === 'black') {
            checkBtn.style.color = 'green';
        } else {
            checkBtn.style.color = 'black';
        }
    }

    if (ev.target.classList.contains("trash")) {
        ev.target.closest(".listContainer").remove();
    }
});
