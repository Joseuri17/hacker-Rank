count = 0;
function add_list()
{
    let name = document.querySelector('#input').value;
    document.querySelector('#input').value= "";
    if (name === '') {
        document.querySelector('#alert').style.display = "block";
    }
    else
    {
        document.querySelector('#alert').style.display = "none";
        count = count + 1;
        if (count == 3)
        {
            const ul = document.querySelector('ul')
            const li = document.createElement('li');
            li.style.color = "red";
            li.style.textAlign = "center";
            li.innerHTML = name;
            ul.appendChild(li);
            count = 0;
        }
        else
        {
            const ul = document.querySelector('ul')
            const li = document.createElement('li');
            li.style.textAlign = "center";
            li.innerHTML = name;
            ul.appendChild(li);
        }



    }
}
document.querySelector('#button').addEventListener("click", add_list);
