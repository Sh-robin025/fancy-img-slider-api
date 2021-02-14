const KEY = '20264454-150d23a215f6ec0be3567ac01';
const input = document.getElementById('search').value;
console.log(input);
const url = `https://pixabay.com/api/?key=${KEY}&q=${input}&image_type=photo&pretty=true`

document.getElementById("search-btn").addEventListener('click', {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})