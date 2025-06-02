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

function generateWiFiQR() {
    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;
    const security = document.getElementById("security").value;
    const hidden = document.getElementById("hidden").checked;
    const wifiString = `WIFI:T:${security};S:${ ssid };P:${ password };H:${hidden};;`;
    
    document.getElementById("qrcode").innerHTML = "";
    
    new QRCode(document.getElementById("qrcode"), {
        text: wifiString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
    
    document.getElementById("download-btn").style.display = "inline-block";
}

function generateVCard() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const org = document.getElementById("org").value;
    const jobTitle = document.getElementById("job-title").value;
    const address = document.getElementById("address").value;
    const note = document.getElementById("note").value;
    
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
ORG:${org}
TITLE:${jobTitle}
ADR:${address}
NOTE:${note}
END:VCARD`;
    
    document.getElementById("qrcode").innerHTML = "";
    
    new QRCode(document.getElementById("qrcode"), {
        text: vCard,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    document.getElementById("download-btn").style.display = "inline-block";
}

function generateEmailQR() {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("msgBody").value;
    
    const emailString = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    document.getElementById("qrcode").innerHTML = "";
    
    new QRCode(document.getElementById("qrcode"), {
        text: emailString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
    document.getElementById("download-btn").style.display = "inline-block";
}

function generateSmsQR() {
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    
    const smsString = `sms:${phone}?body=${encodeURIComponent(message)}`;
    
    document.getElementById("qrcode").innerHTML = "";
    
    new QRCode(document.getElementById("qrcode"), {
        text: smsString,
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