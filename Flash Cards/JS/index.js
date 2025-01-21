const cardForm = document.getElementById("cardForm");
const quesInput = document.getElementById("ques");
const ansInput = document.getElementById("ans");
const errorMsg = document.getElementById("errorMSG");
const CardsGroup = document.getElementById("CardsGroup");

// استرجاع الكروت المحفوظة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", loadFlashcards);

// التعامل مع إرسال النموذج
cardForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    // التحقق من إدخال السؤال والإجابة
    if (quesInput.value === '' || ansInput.value === '') {
        errorMsg.innerText = 'Please fill all fields';
        return;
    }

    // تخزين البطاقة في localStorage
    localStorage.setItem(quesInput.value, ansInput.value);

    // إضافة الكارت الجديد في الصفحة
    addFlashcardToDOM(quesInput.value, ansInput.value);

    // تفريغ الحقول بعد إضافة الكارت
    quesInput.value = '';
    ansInput.value = '';
    errorMsg.innerText = '';
});

// التعامل مع إظهار الإجابة عند النقر على السؤال
CardsGroup.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("cardQues")) {
        const cardAns = ev.target.nextElementSibling;
        cardAns.style.display = cardAns.style.display === 'none' ? 'block' : 'none';
    }
});

// استرجاع الكروت عند تحميل الصفحة
function loadFlashcards() {
    for (let i = 0; i < localStorage.length; i++) {
        const ques = localStorage.key(i);
        const ans = localStorage.getItem(ques);
        addFlashcardToDOM(ques, ans);
    }
}

// إضافة الكارت إلى DOM (الصفحة)
function addFlashcardToDOM(question, answer) {
    CardsGroup.insertAdjacentHTML('beforeend', `
        <div class="innerCard row col-12">
            <hr>
            <p class="cardQues">${question}</p>
            <p class="cardAns" style="display: none;">- ${answer}</p>
        </div>
    `);
}
