import { firebaseConfig } from './firebaseConfig.js';
  
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function saveData(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const recipientPhoneNumber = document.getElementById('recipientPhoneNumber').value; 
    const recipientName = document.getElementById('recipientName').value;
    const relationship = document.getElementById('relationship').value;

    
    const data = {
        customerName: customerName,
        phoneNumber: phoneNumber,
        recipientPhoneNumber: recipientPhoneNumber,
        recipientName: recipientName,
        relationship: relationship,
    };
}
  
