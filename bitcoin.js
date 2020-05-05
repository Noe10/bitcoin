
 function getPriceBitcoin() {
    
    let contador = 0;
   setInterval(async () => {
    let url = 'https://www.bitstamp.net/api/v2/ticker_hour/btcusd/';

    let res = await fetch(url, {
      method: 'GET'
    });

    let response = await res.json();
    console.log(response);
    
    if (!response.last) {
      return alert('No se pudo encontrar el precio');
    }    
    var options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12:"false"};
    
    var time = new Date().toLocaleString("es-ES", options);
    
    
    document.querySelector('#time').innerHTML = time;
    document.querySelector('#price').innerHTML = response.last;
    document.querySelector('#peticiones').innerHTML = contador;
    contador++;
    
    }, 1000);
    
}

