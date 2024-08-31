class Solution:
    def defangIPaddr(self, address: str) -> str:
        print(address)
        newIp = ''
        for i in range(len(address)):
            if address[i] == '.':
                newIp = newIp + '[.]'
            else:
                newIp = newIp + address[i]
            print(address[i])
        return newIp
    
address = "1.1.1.1"
solution = Solution()
print(solution.defangIPaddr(address))
