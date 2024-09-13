function AppExample(){

    // 1. 사용자에게 이름을 입력 받아준다.
    // prompt
    let name = prompt("이름을 입력하세요.")

    // 2. 현태 날짜를 가지고 오기
    // 현재 몇 월? getMonth()
    let today = new Date(); // Data() 객체를 today 변수에 담기
    let date = today.toLocaleDateString(); // Date의 toLocaleDateString()fmf date에 담기
    console.log("오늘의 날짜는?", date);

    let month = today.getMonth() + 1; //+1한 이유는 11까지밖에 안 나와서
    console.log("이번 달은 ", month);

    // 3. 
    // 조건 1) 3~5월 : 봄
    // 조건 2) 6~8월 : 여름
    // 조건 3) 9~11월 : 가을
    // 조건 4) 12~2월 : 겨울

    let season = ""; //빈 문자열 생성, 조건을 비교해 이 빈 문자열에 텍스트 대입

    if(month >= 3 && month <= 5){
        season = "봄";
    } else if(month >= 6 && month <= 8){
        season = "여름";
    } else if (month === 9 || month === 10 || month === 11){
        season = "가을"
    } else{
        season = "겨울";
    }
   
    return(
        <>
        <h1>{date}</h1>
        <hr />
        <h3>{name}님 지금은 {season} 입니다. 좋은 하루 보내세요!</h3>
        </>

    )









}

export default AppExample;