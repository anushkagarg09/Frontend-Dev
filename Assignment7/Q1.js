<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dynamic Product List Manager</title>
<style>
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    #productInput {
        padding: 8px;
        width: 250px;
    }
    #addBtn {
        padding: 8px 12px;
        cursor: pointer;
    }
    ul {
        margin-top: 20px;
        padding: 0;
        list-style: none;
    }
    li {
        padding: 10px;
        background: #f4f4f4;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
    }
    .actions button {
        margin-left: 8px;
        cursor: pointer;
        padding: 5px 8px;
    }
    .edit-input {
        width: 60%;
        padding: 6px;
    }
</style>
</head>

<body>

<h2>Dynamic Product List Manager</h2>

<input type="text" id="productInput" placeholder="Enter product name">
<button id="addBtn">Add</button>

<ul id="productList"></ul>

<script>
    const input = document.getElementById("productInput");
    const addBtn = document.getElementById("addBtn");
    const ul = document.getElementById("productList");

    addBtn.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value) return;
        addProduct(value);
        input.value = "";
    });

    function addProduct(name) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="text">${name}</span>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        ul.appendChild(li);
    }

    
    ul.addEventListener("click", function (e) {
        const target = e.target;
        const li = target.closest("li");

        if (target.classList.contains("delete")) {
            li.remove();
        }


        if (target.classList.contains("edit")) {
            startEditing(li);
        }
    });

    function startEditing(li) {
        const textSpan = li.querySelector(".text");
        const currentText = textSpan.textContent;

        textSpan.outerHTML = `<input class="edit-input" type="text" value="${currentText}">`;

        const inputBox = li.querySelector(".edit-input");
        inputBox.focus();

        document.addEventListener("click", function handler(e) {
            if (e.target !== inputBox) {
                finishEditing(li);
                document.removeEventListener("click", handler);
            }
        });
    }

    
    function finishEditing(li) {
        const input = li.querySelector(".edit-input");
        if (!input) return;
        const newValue = input.value.trim() || "Unnamed Product";

        input.outerHTML = `<span class="text">${newValue}</span>`;
    }
</script>

</body>
</html>
