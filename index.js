const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('please enter url');
    }else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();

            generateQRCode(url, size);
        }, 1000); 
    }
};

const generateQRCode = (url, size)=> {
    const qrcode = new QRCode('qrcode', {
        Text: url,
        width: size,
        height: size,
    });
};

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);