function generateWiFiQR() {
    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;
    const wifiString = `WIFI:T:WPA;S:${ ssid };P:${ password };H:false;;`;
    
    document.getElementById("qr-canvas").innerHTML = "";
    
    let wifiQrcode = new QRCode(document.getElementById("qr-canvas"), {
        text: wifiString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}

function generateQrCode() {
    const inputText = document.getElementById("qr-input").value;
    
    if (!inputText) {
        !alert("Please enter a URL!");
        return;
    }
    
    document.getElementById("qrcode").innerHTML = "";
    
    new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
    
    document.getElementById("download-btn").style.display = "inline-block";
}

function downloadQR() {
    const canvas = document.querySelector("#qrcode canvas");
    const img = document.querySelector("#qrcode img");
    
    if (canvas) {
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = img.src;
        link.click();
    }
}