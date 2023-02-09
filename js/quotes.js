const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author: "-키케로-",
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author: "-랄프 왈도 에머슨-",
    },{
        quote : "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "-파울로 코엘료-",
    },{
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "-단테-",
    },{
        quote : "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "-찰스다윈-",
    },{
        quote : "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다",
        author: "-톨스토이-",
    },{
        quote : "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
        author: "-마크 트웨인-",
    },{
        quote : "문제점을 찾지 말고 해결책을 찾으라",
        author: "-헨리포드-",
    },{
        quote : "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라",
        author: "-에픽토테스-",
    },{
        quote : "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
        author: "-헬렌 켈러-",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;