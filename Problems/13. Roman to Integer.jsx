/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/


// Method 1
var romanToInt = function(s) {
    // Create an integer to hold value to add
    var integer = 0;
    // Create a number to hold the index of s length;
    var sIndex = 0;
    // Use a while loop to loop through the string; set break at the end of the index of s
    while(sIndex < s.length) {
        // Check each character and see what value it match
        // set condition to check for special case
        if (s.charAt(sIndex) === 'I') {
            if (s.charAt(sIndex + 1) === 'V') {
                integer += 4;
                sIndex += 2;
            } else if (s.charAt(sIndex + 1) === 'X') {
                integer += 9;
                sIndex +=2;
            } else {
                integer += 1;
                sIndex++;
            }
        } else if (s.charAt(sIndex) === 'V') {
            integer += 5;
            sIndex++;
        } else if (s.charAt(sIndex) === 'X') {
            if (s.charAt(sIndex + 1) === 'L') {
                integer += 40;
                sIndex += 2;
            } else if (s.charAt(sIndex + 1) === 'C') {
                integer += 90;
                sIndex +=2;
            } else {
                integer += 10;
                sIndex++;
            }
        } else if (s.charAt(sIndex) === 'L') {
            integer += 50;
            sIndex++;
        } else if (s.charAt(sIndex) === 'C') {
            if (s.charAt(sIndex + 1) === 'D') {
                integer += 400;
                sIndex += 2;
            } else if (s.charAt(sIndex + 1) === 'M') {
                integer += 900;
                sIndex +=2;
            } else {
                integer += 100;
                sIndex++;
            }
        } else if (s.charAt(sIndex) === 'D') {
            integer += 500;
            sIndex++;
        } else if (s.charAt(sIndex) === 'M') {
            integer += 1000;
            sIndex++;
        } else {
            return null;
        }
    }
    // Return integer
    return integer;
};