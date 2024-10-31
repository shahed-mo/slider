const img=document.querySelector('img');
const txt =document.querySelector('#text');
const btn= document.getElementById('btn')
let index=0;
const slider=[
    {
       text:'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple',
        imgUrl:'https://img.freepik.com/premium-photo/get-serious-serious-man-portrait-yellow-background-keeping-straight-face_474717-140131.jpg?w=900'
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
     },
     {
        imgUrl:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1730392786~exp=1730396386~hmac=220f4ec6d96c52f85d5f96b7457314dcde483957c708f2c87bebad123fdf0727&w=900",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
     },
]


function updateSlider(){
    const { text, imgUrl } = slider[index];
    img.src=imgUrl;
    txt.innerHTML=text;
    index++;
if(index===slider.length){
index=0;
}
}
btn.addEventListener('click',updateSlider)
setInterval(updateSlider,3000)