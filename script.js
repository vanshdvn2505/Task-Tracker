let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    
    let task = document.querySelector('.int');
    let input = task.value;
    task.value = "";

    if(input == ""){
        alert("Enter correct input");
        return;
    }

    let list = document.querySelector('.pending');

    let item = document.createElement('div');
    let data = document.createElement('div');
    let func = document.createElement('div');
    let create = document.createElement('div');
    let del = document.createElement('div');

    item.className = 'item';
    data.className = 'data';
    func.className = 'func';
    create.className = 'create';
    del.className = 'del';

    create.innerHTML = "<button>Completed</button>";
    del.innerHTML = "<button>Delete</button>";

    func.appendChild(create);
    func.appendChild(del);

    func.style.display = "flex";
    func.style.justifyContent = "space-evenly";
    func.style.alignItems = "center";
    func.style.width = "70%";
    func.style.height = "80%";

    del.style.width = "50%";
    del.style.height = "80%";
    del.querySelector('button').style.borderStyle = "solid";
    del.querySelector('button').style.borderWidth = "2px";
    del.querySelector('button').style.borderColor = "white";
    del.querySelector('button').style.borderRadius = "2rem";
    del.querySelector('button').style.backgroundColor = "transparent";
    del.querySelector('button').style.width = "90%";
    del.querySelector('button').style.height = "100%";
    del.querySelector('button').style.color = "white";
    del.style.display = "flex";
    del.style.justifyContent = "center"
    del.style.alignItems = "center";

    create.style.width = "50%";
    create.style.height = "80%";
    create.querySelector('button').style.borderStyle = "solid";
    create.querySelector('button').style.borderWidth = "2px";
    create.querySelector('button').style.borderColor = "white";
    create.querySelector('button').style.borderRadius = "2rem";
    create.querySelector('button').style.backgroundColor = "transparent";
    create.querySelector('button').style.width = "90%";
    create.querySelector('button').style.height = "100%";
    create.querySelector('button').style.color = "white";
    create.style.display = "flex";
    create.style.justifyContent = "center";
    create.style.alignItems = "center";

    data.innerHTML = input;
    data.style.width = "30%";
    data.style.height = "20%";
    data.style.display = "flex";
    data.style.justifyContent = "center";
    data.style.alignItems = "center";


    item.appendChild(data);
    item.appendChild(func);

    item.style.display = "flex";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";
    item.style.width = "80%"
    item.style.height = "25%";

    list.appendChild(item);

    del.querySelector('button').addEventListener('click',()=>{
        let parent = del.parentNode.parentNode;
        parent.remove();
    });

    
    create.querySelector('button').addEventListener('click',()=>{
        
        let neighbour = document.querySelector('.list2');
        let item2 = document.createElement('div');
        let data2 = document.createElement('div');
        let del2 = document.createElement('div');

        del2.innerHTML = '<button>Delete</button>';
        del2.className = 'del2';

        item2.className = 'item2';
        data2.className = 'data2';

        let p = create.parentNode.parentNode.firstChild.innerHTML;

        
        item2.appendChild(data2);
        item2.appendChild(del2);

        del2.style.width = "50%";
        del2.style.height = "70%";
        del2.querySelector('button').style.borderStyle = "solid";
        del2.querySelector('button').style.borderWidth = "2px";
        del2.querySelector('button').style.borderColor = "white";
        del2.querySelector('button').style.borderRadius = "2rem";
        del2.querySelector('button').style.backgroundColor = "transparent";
        del2.querySelector('button').style.width = "90%";
        del2.querySelector('button').style.height = "80%";
        del2.querySelector('button').style.color = "white";
        del2.style.display = "flex";
        del2.style.justifyContent = "center"
        del2.style.alignItems = "center";
        
        data2.innerHTML = p;
        data2.style.width = "80%";
        data2.style.height = "50%";
        data2.style.display = "flex";
        data2.style.justifyContent = "center"
        data2.style.alignItems = "center";
        
        item2.style.display = "flex";
        item2.style.justifyContent = "center";
        item2.style.alignItems = "center";
        item2.style.width = "70%";
        item2.style.height = "20%";

        neighbour.appendChild(item2);
        
        let parent1 = create.parentNode.parentNode;
        parent1.remove(); 

        del2.querySelector('button').addEventListener('click',()=>{
            let parent2 = del2.parentNode;
            parent2.remove();
        });
    });

});