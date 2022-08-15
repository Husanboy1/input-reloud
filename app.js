function addtable(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let year = document.getElementById('year');
    let tbody = document.querySelector('tbody');
    // let tr = document.querySelector('tr');
    let tr = document.createElement('tr')
    
    
    if(title.value == '' || author.value == ''){
        alert('toldir')
    }else{
        tr.setAttribute('class', 'text-center');
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td.innerHTML = title.value
        td1.innerHTML = author.value
        td2.innerHTML = year.value
        tr.append(td, td1, td2);
        tbody.appendChild(tr)
        title.value = '';
        author.value = '';
        year.value = ''
    }
}
