# class Solution:
#     def findPermutationDifference(self, s: str, t: str) -> int:
#         sum = 0
#         for i in range(len(s)):
#             for j in range(len(t)):
#                 if s[i] == t[j]:
#                     print(i, j)
#                     sum += abs(i - j)
#                     break
#         return sum


# s = "abcde"
# t = "edbac"
# solution = Solution()
# print(solution.findPermutationDifference(s, t))

class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        # Create a dictionary to store the positions of characters in string t
        position_map = {char: index for index, char in enumerate(t)}
        # print(position_map)
        
        sum = 0
        # Iterate through string s and use the position_map to calculate the difference
        for i, char in enumerate(s):
            # print(i, char)
            if char in position_map:
                # print(position_map[char])
                sum += abs(i - position_map[char])
        
        return sum


s = "abcde"
t = "edbac"
solution = Solution()
print(solution.findPermutationDifference(s, t))
