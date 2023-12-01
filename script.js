// ------- First Problem ---------

// Companies
    // Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
    // A string is represented by an array if the array elements concatenated in order forms the string.


// Example 1:
    // Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
    // Output: true
    // Explanation:
    // word1 represents string "ab" + "c" -> "abc"
    // word2 represents string "a" + "bc" -> "abc"
    // The strings are the same, so return true.


// Example 2:
    // Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
    // Output: false

// Example 3:
    // Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
    // Output: true


// Constraints:
    // 1 <= word1.length, word2.length <= 103
    // 1 <= word1[i].length, word2[i].length <= 103
    // 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
    // word1[i] and word2[i] consist of lowercase letters.


// Solution:
console.log("------ Question 1: Matching Arrays ---------")

// Test Cases
let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

let word3 = ["a", "cb"];
let word4 = ["ab", "c"];

let word5 = ["abc", "d", "defg"];
let word6 = ["abcddefg"];

// Function to solve the test cases
function stringMatch(array1, array2) {
    // Concatenate both arrays into a single string
    let string1 = array1.join("");
    let string2 = array2.join("");

    if (string1.length === string2.length) {
        return string1 === string2;  
    } else {
        return false;
    }
}

// Test case1
let result1 = stringMatch(word1, word2);
console.log("Test - Result for case 1 (should be true): ", result1);

// Test case2
let result2 = stringMatch(word3, word4);
console.log("Test - Result for case 2 (should be false): ", result2);

// Test case3
let result3 = stringMatch(word5, word6);
console.log("Test - Result for case 3 (should be true): ", result3);

// ------- Second Problem ---------

// Solution:
// Given an integer x, return true if x is a palindrome and false otherwise


// Solution: 
console.log("------ Question 2 ---------")

function palindrome(variable) {
    let string = variable.toString();
    let reversedString = string.split("").reverse().join("");
    return reversedString === string;
}

let a = 121;
let b = -121;
let c = 10;

console.log("Test - Palindrome, variable = 121, should equal true: ", palindrome(a));
console.log("Test - Palindrome, variable = -121, should equal false: ", palindrome(b));
console.log("Test - Palindrome, variable = 10, should equal false: ", palindrome(c));

