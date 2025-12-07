# menually create singly link list

# class Node:
#     def __init__(self, new_data):
#         self.data = new_data
#         self.next = None

#     def display(self):    # Can add methods
#         return f"Node({self.data})"

# head = Node(10)  # head → [10|next]→None
# head.next = Node(20)  # head → [10|next]→None
# print(head.display())


# create singly link list through the loop
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Method 1A: Using a for loop to create from a list
def create_from_list(values):
    """Create a linked list from a Python list"""
    llist = LinkedList()
    for value in values:
        llist.append(value)
    return llist

# Method 1B: Using list comprehension
# def create_from_list_comprehension(values):
#     """Create a linked list using list comprehension"""
#     llist = LinkedList()
#     [llist.append(value) for value in values]
#     return llist

# Example usage
if __name__ == "__main__":
    # Create from a list using loop
    my_list = [1, 2, 3, 4, 5]
    
    print("Method 1A - Using for loop:")
    llist1 = create_from_list(my_list)
    llist1.print_list()
    
    # print("\nMethod 1B - Using list comprehension:")
    # llist2 = create_from_list_comprehension(my_list)
    # llist2.print_list()