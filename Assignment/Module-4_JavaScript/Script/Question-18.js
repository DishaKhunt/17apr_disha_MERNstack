function result() {
    
    let c = parseInt(document.getElementById('c').value);
    let cpluse = parseInt(document.getElementById('c++').value);
    let database = parseInt(document.getElementById('database').value);
    let html = parseInt(document.getElementById('html').value);
    let css = parseInt(document.getElementById('css').value);
    let php = parseInt(document.getElementById('php').value);
    let java = parseInt(document.getElementById('java').value);

    let totalMarks = c + cpluse + database + html + css + php + java;
    let percentage = (totalMarks/350)*100;

    document.getElementById('total').innerHTML = totalMarks;
    document.getElementById('percentage').innerHTML = percentage + '%';
}
