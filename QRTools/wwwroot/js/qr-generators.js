function generateQrCode() {
    const inputText = document.getElementById("qr-input").value.trim();

    if (!inputText) {
        !alert("Please enter a URL!");
        return;
    }
    if (inputText > 2000) {
        alert("URL too long (max 2000 characters)");
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
    const ssid = document.getElementById("ssid").value.trim();
    const password = document.getElementById("password").value;
    const security = document.getElementById("security").value;
    const hidden = document.getElementById("hidden").checked;
    const wifiString = `WIFI:T:${security};S:${ ssid };P:${ password };H:${hidden};;`;
    
    if (!ssid || ssid.length > 32) {
        alert("SSID is required.")
        return;
    }
    if (security === "WPA" && (password.length < 8 || password.length > 63)) {
        alert("WPA password must be 8-63 characters.")
        return;
    }
    if (security === "WEP" && ![5, 10, 13, 26].includes(password.length)) {
        alert("WEP password must be 5, 10, 13 or 26 characters.")
        return;
    }
    if (security === "nopass" && password) {
        alert("Leave password blank for open networks.")
        return;
    }
    
    
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
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const org = document.getElementById("org").value.trim();
    const jobTitle = document.getElementById("job-title").value.trim();
    const address = document.getElementById("address").value.trim();
    const note = document.getElementById("note").value.trim();
    
    if (!name || (!phone && !email)) {
        alert("Name is required, plus either phone or email.")
        return;
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address format.")
        return;
    }
    function escapeVCardField(field) {
        return field.replace(/\n/g, '\\n')
            .replace(/,/g, '\\,')
            .replace(/;/g, '\\;');
    }
    
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${escapeVCardField(name)}
TEL:${phone}
EMAIL:${email}
ORG:${escapeVCardField(org)}
TITLE:${escapeVCardField(jobTitle)}
ADR:${escapeVCardField(address)}
NOTE:${escapeVCardField(note)}
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
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const body = document.getElementById("msgBody").value.trim();
    const totalLength = subject.length + body.length;
    
    if (!email) {
        alert("Email address is required.")
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address format.")
        return;
    }
    if (totalLength > 1500) {
        alert("Message too long for reliable QR scanning (1500 characters max).")
        return;
    }
    
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
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!phone) {
        alert("Phone number is required.")
        return;
    }
    
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