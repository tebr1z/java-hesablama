

//-----------------------------------------------------------

// const AD = document.getElementById('adiniz')
// const SOYAD = document.getElementById('adiniz')
// const YAS = document.getElementById('adiniz')

btn.onclick = function (){
    const trad = document.createElement("td")
    const trsoyad = document.createElement("td")
    const trid = document.createElement("td")
    const tryas = document.createElement("td")

   const b =parseInt(document.getElementById('iliniz').value)
    const yas = 2023-b 

    trad.textContent = document.getElementById('adiniz').value;
    trsoyad.textContent = document.getElementById('soyadiniz').value;
    trid.textContent = document.getElementById('idniz').value
    tryas.textContent = yas
    let tr = document.createElement("tr")

    tr.appendChild(trad);
    tr.appendChild(trsoyad);
    tr.appendChild(trid);
    tr.appendChild(tryas);

    tablo.appendChild(tr)

    adiniz.value = "";
    soyadiniz.value = "";
    iliniz.value = "";
    idniz.value="";

    adiniz.focus();

}