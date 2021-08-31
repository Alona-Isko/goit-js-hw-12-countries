export default function getRefs() {
    return {
        form: document.querySelector('#form'),
        input: document.querySelector('#search'),
        container: document.querySelector('.container'),
        list: document.querySelector('.countries__list')
    };
}