import random

class QuantumParticle:
    def __init__(self, x=1000, y=0.1, p=0.5):
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
    
    def entangle(self, second_particle):
        if not isinstance(second_particle, QuantumParticle):
            raise Exception("can entangle only with another particle")
        if self.x == second_particle.x and self.y == second_particle.y and self.p == second_particle.p:
            print("Spooky Action at a Distance")
            return False
        self.disturbance()
        second_particle.x  = 10000 - self.x
        second_particle.y = 1 - self.y
        second_particle.p = self.p * -1
        print("Particle p1 is now in quantum entanglement with Particle p2")
    

        
    
particle = QuantumParticle(100, 0.1, 0.5)
print(repr(particle))
print(f"\nmeasurment position: {particle.position()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")

print(f"\nmeasurment momentum: {particle.momentum()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")

print(f"\nmeasurment spin: {particle.spin()}")
print(f"after measurement: x = {particle.x} y = {particle.y} p = {particle.p}\n")

particle1 = QuantumParticle(100, 0.5, 0.5)
particle2 = QuantumParticle(1000, 1, -0.5)
particle1.entangle(particle2)
print(f"particle1: {particle1.x} {particle1.y} {particle1.p}")
print(f"particle2: {particle2.x} {particle2.y} {particle2.p}\n")

particle3 = QuantumParticle()
particle4 = QuantumParticle()
particle3.entangle(particle4)
print(f"particle1: {particle3.x} {particle3.y} {particle3.p}")
print(f"particle2: {particle4.x} {particle4.y} {particle4.p}\n")