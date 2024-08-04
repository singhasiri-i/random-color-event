// การใช้ Event กับ this keyword

const btnTag = document.querySelectorAll('#btn') // เอามาทุก button


for (const btn of btnTag) { // วน for loop เพื่อวนแต่ละตัว
    btn.addEventListener("click", function() { // ถ้ามี event (การ click) เข้ามาแต่ละตัว
        let btnColor = randomColor() // ให้วนเริ่มจากตัวแรก random code สีก่อน
        this.style.backgroundColor = btnColor // แล้วค่อยเปลี่ยน style ทีละปุ่ม
    })
}

const h1Tag = document.querySelectorAll('h1') // สำหรับ h1

for (const h1 of h1Tag) {
    h1.addEventListener("click", function() { // ถ้ามี event (การ click) เข้ามาแต่ละตัว
        let h1Color = randomColor() // ให้วนเริ่มจากตัวแรก random code สีก่อน
        this.style.backgroundColor = h1Color // แล้วค่อยเปลี่ยน style ทีละปุ่ม
    })
}


function randomColor() { // ให้มัน random code สี rgb ซึ่งแต่ละอันไม่เกิน 255
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let color = `rgb(${r},${g},${b})`
    return color
}

