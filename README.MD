Code Challenge - JavaScript (License Key Logic)
License Key Reformatting Problem
Problem: You have a license key that needs to be reformatted for better readability.

Task: Reformat a license key string by grouping characters with dashes.

Given:

A string with alphanumeric characters and dashes
An integer K (desired group size)
Goal:

 All letters should be uppercase.
 Break result into groups of K characters each
 except the first group which can be shorter
 but must have at least 1 character.
Note: The first group can have fewer than K characters, but all other groups must have exactly K characters.

Examples:
Input: "5F3Z-2e-9-w", K=4
Output: "5F3Z-2E9W"
Input: "2-5g-3-J", K=2
Output: "2-5G-3J"
Running the project
Run, in the root of the project:
./run.sh