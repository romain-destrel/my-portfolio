const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open('GET', 'https://sportapi7.p.rapidapi.com/api/v1/event/xdbsZdb/h2h/events');
xhr.setRequestHeader('x-rapidapi-key', 'ec587e6c44mshfc215e1ad578e49p1bcd8ejsn20af305b24a7');
xhr.setRequestHeader('x-rapidapi-host', 'sportapi7.p.rapidapi.com');

xhr.send(data);