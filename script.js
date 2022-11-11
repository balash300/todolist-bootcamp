document.querySelector('#push').onclick = function () {
    if (document.querySelector('#pshlst input').value.length == 0) {
        alert("You must write something!");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="inptdiv task">
                <span id="taskname" class="todotask">
                    ${document.querySelector('#pshlst input').value}
                </span>
                <svg class="closebtn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
                <path d="M6 6L14 14" stroke="#C4C4C4"/>
                <path d="M6 14L14 6" stroke="#C4C4C4"/>
                </svg>
            </div>
        `;

        var currentTask = document.querySelectorAll(".closebtn");
        for (let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
        document.querySelector('#pshlst input').value = "";

    }
}
let downbtn = document.querySelector(".sortdown");
let upbtn = document.querySelector(".sortup");
downbtn.addEventListener('click', abcSort)
downbtn.addEventListener('click', mytogg)
upbtn.addEventListener('click', cbaSort)
upbtn.addEventListener('click', mytogg)

function mytogg() {
    var buttonsort = document.querySelectorAll(".buttonsort");
    for (let i = 0; i < buttonsort.length; i++) {
        buttonsort[i].classList.toggle('off');
    }
}

function abcSort() {
    const taskSort = [...document.querySelectorAll('#tasks > .task')].map((task) => task.innerHTML).sort();
    document.querySelectorAll('#tasks > .task').forEach((item, i) => {

        item.innerHTML = taskSort[i];
        item.innerHTML += '';
    });
    var currentTask = document.querySelectorAll(".closebtn");
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function () {
            this.parentNode.remove();
        }
    }

}

function cbaSort() {
    const taskSort = [...document.querySelectorAll('#tasks > .task')].map((task) => task.innerHTML).sort();
    taskSort.reverse();
    document.querySelectorAll('#tasks > .task').forEach((item, i) => {

        item.innerHTML = taskSort[i];

    });
    var currentTask = document.querySelectorAll(".closebtn");
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function () {
            this.parentNode.remove();
        }
    }
}