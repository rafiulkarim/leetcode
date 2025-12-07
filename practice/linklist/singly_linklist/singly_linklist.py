class Node:
    def __init__(self, new_data):
        self.data = new_data
        self.next = None

    def display(self):    # Can add methods
        return f"Node({self.data})"

head = Node(10)  # head → [10|next]→None
head.next = Node(20)  # head → [10|next]→None
print(head.display())

