document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = "Нету айпи лол";
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP адрес скопирован: ' + ip);
    });
});
