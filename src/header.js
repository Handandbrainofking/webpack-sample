export default function header() {
    let dom = document.querySelector('#app')
    let header = document.createElement('div')
    header.innerHTML = 'Header content'
    dom.appendChild(header)
}