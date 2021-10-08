const dlbutton = document.querySelector('.dl_btn')
const body = document.querySelector('body')
const input = document.querySelector('input')
const inputbutton = document.querySelector('.addtask_btn')
const parent = document.querySelector('.list_items')
const gparent = document.querySelector('.forscroll')
const deletebutton = document.querySelector('.fa-times')

//dark light mode toggling
const dlbutton_callbackfuntion = (() => {
    body.classList.toggle('dark')
})
dlbutton.addEventListener('click', dlbutton_callbackfuntion)

//input into list
var arr = []
iteminput = input.value
const inputbutton_callback = (iteminput) => {
    if (arr.includes(iteminput) == true) {
        prompt("already exsits")
    } else {
        const template = `
                <div class="checkbutton">
                    <i class="fa fa-check-circle"></i>
                </div>
                <div class="item">
                    <p>${input.value}<p>   
                </div>
                <div class="list_tools">
                    <i class="fa fa-times"></i>
                    <i class="fas fa-bars"></i>
                </div>
                `
        const newitem = document.createElement('div')
        newitem.setAttribute('class', 'items')
        newitem.innerHTML = template
        console.log(newitem)
        newi = parent.appendChild(newitem)
        gparent.appendChild(newi)
    }
}

// arr.forEach(inputbutton_callback)
inputbutton.addEventListener('click', (e) => {
    inputbutton_callback(input.value)
    arr.push(inputbutton_callback)
    console.log(arr)
})

console.log(arr)

//delete item
deletebutton.addEventListener('click', (e) => {
    arr.splice(e.target, 1)
    console.log(arr)
})