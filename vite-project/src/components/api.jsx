const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/';

export default function generateQRCode(qrData, qrSize){
    const qrImageUrl = `${qrUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
    return qrImageUrl;
}