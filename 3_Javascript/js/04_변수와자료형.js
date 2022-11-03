var str = "JS 코드를 함수가아닌"
        +"JS 파일 또는 script 태그 내부에 바로 작성하면 "
        +"HTML 랜더링 시 바로 수행된다.";

console.log(str);


// 변수 선언 위치에 따른 구분
var num1 = 100; // 전역 변수
num2 = 200;     // 전역 변수


console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test(){
    var num3= 300;  // function 지역변수
    num4 = 400;     // 전역 변수

    console.log("함수 배부 num 3 : "+ num3);
    console.log("함수 배부 num 4 : "+ num4);

    if(num3 == 300){
        var num5 = 500;
        num6 = 600;
    }
    

    console.log("if문 종료 후 num5 : " + num5); // funtion 지역 변수
    console.log("if문 종료 후 num6 : " + num6); // 전역 변수

}
test(); // 함수 호출

// console.log("함수 외부 num 3 : "+ num3); // num3 is not defined
// 함수 종료 후에는 사용 불가

// *** script언어는 중간에 에러가 발생하면 해석을 멈춤 ***

console.log("함수 외부 num 4 : "+ num4); // 전역 변수
// 함수 종료 후에도 사용 가능


//console.log("함수 종료 후 num5 : " + num5); // funtion 지역 변수
// num5 is not defined

console.log("함수 종료 후 num6 : " + num6); // 전역 변수