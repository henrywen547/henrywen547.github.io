/*亂數產生
 *(1) 使用 JS 設計一個樂透遊戲並在網頁中以文字說明遊戲規則，
 *使用者可在網頁上自行輸入 3 個號碼 (範圍是數字 1~10)；
 *每次開始遊戲時會亂數產生 3 個得獎號碼 (範圍是數字 1~10 不重複)；
 *當使用者輸入 3 個號碼並按下開獎按鈕後，會開始比對輸入的號碼及得獎號碼 (不管排列先後順序)，
 *全部對中時為頭獎、2 個號碼對中為貳獎、1 個號碼對中為參獎
*/
function generateRandomNum(){
    var answers = [];
    while(answers.length < 3){
        var num = Math.floor(Math.random()*10)+1;
        if(answers.indexOf(num) == -1){
            answers.push(num);
        }
    }
    return answers;
}
/*
 *(5) 具備輸入檢查功能，若使用者輸入的內容非有效數值或者重複的數字，
 *按下開獎按鈕後會跳出警告訊息，並觸發重新開始(reset)功能 
*/
function checkNumber(){
    var user_input = [];
    var inputs = document.getElementsByClassName("numInput");
    for(var i = 0; i < inputs.length; i++){
        var number = parseInt(inputs[i].value);
        if(isNaN(number)|| number < 1 || number > 10){
            alert('Input Invalid!');
            reset();
            return;
        }
        else{
            user_input.push(number);
        }
    }
    for(var i = 0; i < user_input.length; i++){
        for(var j = i+1; j < user_input.length; j++){
            if(user_input[i] == user_input[j]){
                alert('Input Invalid!');
                reset();
                return;
            }
        }
    }
    var answers = generateRandomNum();
    var correct = 0;
    for (var i = 0; i < user_input.length; i++){
        if(answers.includes(user_input[i])){
            correct++;
        }
    }
    /*(2) 三個獎項皆設有不同金額的中獎獎金(金額為自訂之正整數)，
     *當使用者按下開獎按鈕後網頁上會顯示中獎或沒中獎的訊息，
     *若有中獎還會額外顯示獎項和獎金金額
    */
    var message;
    var prizeAmts = [1000000, 200000, 100000];
    var prize = 0;
    if(correct > 0){
        prize = prizeAmts[3-correct];
    }
    if(correct == 3){
        message = "恭喜您中了頭獎!\n獎金為" + prize + "元";
    }else if(correct == 2){
        message = "恭喜您中了貳獎!\n獎金為" + prize + "元";
    }else if(correct == 1){
        message = "恭喜您中了參獎!\n獎金為" + prize + "元";
    }else{
        message = "抱歉您沒有中獎!";
    }
    document.getElementById("result").innerHTML = message;
}
/*
 *(4) 具備重新開始(reset)功能的按鈕，讓使用者可以進行全新一輪的遊戲 (重新亂數產生得獎號碼並清空舊訊息)
 *重新亂數產生效果於按下開獎按鈕後才會出現 
*/
function reset(){
    var inputs = document.getElementsByClassName('numInput');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    document.getElementById("result").innerHTML = "";
}