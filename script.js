
function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

// Add an event listener to the button
document.getElementById('button').addEventListener('click', function() {
    // Call the generateOTP function and get the OTP
    const otp = generateOTP();
    
    // Display the OTP in the h1 tag
    document.getElementById('output').innerText = `Your OTP is: ${otp}`;
});