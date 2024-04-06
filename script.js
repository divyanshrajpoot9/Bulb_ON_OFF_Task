// let image_ref = document.getElementById('img_id');
//     let btn_ref = document.getElementById('btn');
//     // console.log(image_ref);

// function switch_me() {
//     if( btn_ref.innerText == 'Switch On') {
//         image_ref.src = 'bulb_on.jpg'; 
//         btn_ref.innerText = 'Switch Off';
//     }
//     else{
//         image_ref.src = 'bulb_off.jpg'; 
//         btn_ref.innerText = 'Switch On';
//     }
// };



// This line gets a reference to the image element with the id 'img_id' from the HTML document.
let image_ref = document.getElementById('img_id');
// This line gets a reference to the button element with the id 'btn' from the HTML document.
let btn_ref = document.getElementById('btn');
// This is a function declaration named switch_me, which will be called when the button is clicked.
function switch_me() {
    // This checks if the text content of the button is 'Switch On'.
    if (btn_ref.innerText == 'Switch On') {
        // If the button text is 'Switch On', it changes the src attribute of the image to 'bulb_on.jpg'.
        image_ref.src = 'bulb_on.jpg';
        // It also changes the text content of the button to 'Switch Off'.
        btn_ref.innerText = 'Switch Off';
    }
    // If the text content of the button is not 'Switch On', it executes this block of code.
    else {
        // It changes the src attribute of the image to 'bulb_off.jpg'.
        image_ref.src = 'bulb_off.jpg';
        // It changes the text content of the button back to 'Switch On'.
        btn_ref.innerText = 'Switch On';
    }
};

