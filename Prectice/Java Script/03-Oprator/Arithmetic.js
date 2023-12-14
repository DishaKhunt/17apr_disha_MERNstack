let inp1 = document.getElementById('inp-1');
let inp2 = document.getElementById('inp-2');
let answer = document.getElementById('ans');
function add()
{
    answer.value = parseInt(inp1.value) + parseFloat(inp2.value);
}

function sub()
{
    answer.value = parseInt(inp1.value) - parseFloat(inp2.value);
}

function mul()
{
    answer.value = parseInt(inp1.value) * parseFloat(inp2.value);
}

function div()
{
    answer.value = parseInt(inp1.value) / parseFloat(inp2.value);
}

function exp()
{
    answer.value = parseInt(inp1.value) ** parseFloat(inp2.value);
}

function mod()
{
    answer.value = parseInt(inp1.value) % parseFloat(inp2.value);
}

function inc()
{
    answer.value =  parseInt(inp1.value)++;
}

function dec()
{
    answer.value = parseInt(inp1.value)--;
}