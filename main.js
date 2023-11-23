function pilihanComputer () {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil ( comp, player){
    if( player == comp )return 'Seri';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'Menang' : 'Kalah';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'Kalah' : 'Menang';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'Kalah' : 'Menang';
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;

    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img-suwit-jawa/img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(e){
    e.addEventListener('click', function(){
        const getPilihanComputer = pilihanComputer();
        const pilihanPlayer = e.className;
        const Hasil = getHasil(getPilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img-suwit-jawa/img/' + getPilihanComputer + '.png');
        
            const info = document.querySelector('.info');
            info.innerHTML = Hasil;
        },1000);

    

    })
})


