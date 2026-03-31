let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    // 3と5の両方で割り切れる場合
    console.log("3と5の倍数です");
} 
else if(num % 3 === 0) {
    // 3で割り切れる場合
    console.log("3の倍数です");
} 
else if (num % 5 === 0) {
    // 5で割り切れる場合
    console.log("5の倍数です");
}
else {
    //それ以外の場合(数値そのものを入力)
    console.log(num);
}
