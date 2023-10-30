// 3. Create two functions:
// a. First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
// b. Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
// c. Reference: https://youtu.be/l6jqKRXSShI
function encryptedString(word='JS tenth edition'){
    let arr=word.split('');
    let encWord='';
    for (el of arr){
        encWord+=String.fromCharCode(el.charCodeAt(0)+1);   
    }
    console.log(encWord);
    return encWord;
}
function decryptedString(f=encryptedString('JS tenth edition')){
    let encWord=f;
    let arr=encWord.split('');
    let decWord='';
    for (el of arr){
        decWord+=String.fromCharCode(el.charCodeAt(0)-1);   
    }
    console.log(decWord);
}
decryptedString();