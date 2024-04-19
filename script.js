const list = document.querySelector('ul')
const linkFOREACH = document.querySelector('.FOREACH')
const linkMAP = document.querySelector('.MAP')
const linkREDUCE = document.querySelector('.REDUCE')
const linkFILTER = document.querySelector('.FILTER')



function formatMoeda(value) {

    const newvalue = new Intl.NumberFormat('pt-br', 
    { style: 'currency', 
    currency: 'BRL' }).format(value)

    return newvalue
        
}

function showScreen(ARRAY) {


    let myprodutc = ''

    ARRAY.forEach((item) => {

        myprodutc += `

    
    <li>

         <img class="cardapio" src=${item.src}>

         <p>${item.name}</p>

         <h4>${formatMoeda(item.price)}</h4>
       

        
    </li>
    
    ` 
    })

    list.innerHTML = myprodutc

}
function showDiscount() {

    const discount = menu1.map((value) => ({
        ...value,
        price: value.price * 0.9,

    }))

    showScreen(discount)

}

function showSum() {

    const Sum = menu.reduce((acumulador, value) => acumulador + value.price, 0)

    list.innerHTML = `
    <li>


    <h1> Valor Total do Pedido </h1> 
    <h2> ${formatMoeda(Sum)}</h2>
</li>`

}

function showFilter() {

    const screenFilter = menu2.filter((produtc) => produtc.lanches === false)

    showScreen(screenFilter)

}




linkFOREACH.addEventListener('click', () => showScreen(menu))
linkMAP.addEventListener('click', showDiscount)
linkREDUCE.addEventListener('click', showSum)
linkFILTER.addEventListener('click', showFilter)










