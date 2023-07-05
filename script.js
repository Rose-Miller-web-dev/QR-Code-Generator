const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generationBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

console.log(generationBtn, '#generationBtn')

console.log(wrapper, '#wrapper')

generationBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if (!qrValue)
        return
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    console.log(qrValue, '#qrValue')
    wrapper.classList.add("active")
})

