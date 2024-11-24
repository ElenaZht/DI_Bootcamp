#Create a class called Phone. This class takes a parameter 
# called phone_number. When instantiating an object create 
# an attribute called call_history which value is an empty 
# list.
class Phone:
    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone, call_type):
        if call_type == 'outgoing':
            print(f"I am calling to {other_phone}")
            self.call_history.append(f"I am is calling to {other_phone}")
        elif call_type == 'incoming':
            print(f"{other_phone} is calling to me")
            self.call_history.append(f"{other_phone} is calling to me")
    
    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, message, message_type):
        if message_type == 'outgoing':
            print(f"I am sending message to {other_phone}:")
            print(message)
            message_log = {
                'to': other_phone,
                'from': self.number,
                'content': message
                }
            self.messages.append(message_log)
        elif message_type == 'incoming':
            print(f"{other_phone} is sending message to me:")
            print(message)
            message_log = {
                'to': self.number,
                'from': other_phone,
                'content': message
                }
            self.messages.append(message_log)

    def show_outgoing_messages(self):
        outgoing_messages = [message for message in self.messages if message['from'] == self.number]
        return outgoing_messages

    def show_incoming_messages(self):
        incoming_messages = [message for message in self.messages if message['to'] == self.number]
        return incoming_messages

    def show_messages_from(self, other_phone):
        messages_from_num = [m for m in self.messages if m['from'] == other_phone]
        return messages_from_num

def main():
    my_phone = Phone('054-004-99-00')
    print(f"i bouth a new phone {my_phone.number}")
    print("\n")
    print("then i called to my sister:")
    my_phone.call('054-005-05-05', 'outgoing')
    print("\n")
    print("but she was out. then she called me back:")
    my_phone.call('054-005-05-05', 'incoming')
    print("\n")
    print(f"now my call history is:\n {my_phone.call_history}")
    print("\n")
    print("i desided to order a pizza..")
    my_phone.send_message('054-011-01-01', 'please send me pizza', 'outgoing')
    my_phone.send_message('054-011-01-01', 'sorry, we run out of olives', 'incoming')
    my_phone.send_message('054-011-01-01', 'its ok, put onion instead', 'outgoing')
    my_phone.send_message('054-011-01-01', 'we will send it right away!', 'incoming')
    print("\n")
    print(f"my messages to pizza men:\n {my_phone.show_outgoing_messages()}")
    print("\n")
    print(f"and this is what pizza men answered:\n{my_phone.show_incoming_messages()}")
    print("\n")
    my_phone.send_message('054-005-05-05', 'hey!', 'incoming')
    my_phone.send_message('054-005-05-05', 'give me back my short!', 'incoming')
    print(f"than i recieved messages from my sis:\n{my_phone.show_messages_from('054-005-05-05')}")





main()
