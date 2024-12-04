import random

class QuantumParticle:
    def __init__(self, x, y, p):
        self.x = x
        self.y = y
        self.p = p

    def __repr__(self):
        return f"particle: position {self.x} momentum {self.y} spin {self.p}"
    
    def disturbance(self):
        self.x = random.randrange(10000)
        self.y = random.uniform(0, 1)
        print("Quantum Interferences!!")

    def position(self):
        self.disturbance()
        return self.x
    
    def momentum(self):
        self.disturbance()
        return self.y

    def spin(self):
        self.disturbance()
        self.p = random.choice([1/2, -1/2])
        return self.p
    

        
    
particle = QuantumParticle(100, 0.1, 0.5)
print(repr(particle))
print(f"\nmeasurment position: {particle.position()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")

print(f"\nmeasurment momentum: {particle.momentum()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")

print(f"\nmeasurment spin: {particle.spin()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")