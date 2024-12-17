import random

class Gene:
    def __init__(self, value):
        if value not in [0, 1]:
            raise ValueError("A gene value must be 0 or 1.")
        self.value = value

    def mutate(self):
        self.value = 1 - self.value

    def __str__(self):
        return str(self.value)

class Chromosome:
    def __init__(self):
        self.genes = [Gene(random.choice([0, 1])) for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  # 50% chance to mutate
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __str__(self):
        return "".join(str(gene) for gene in self.genes)

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __str__(self):
        return "\n".join(str(chromosome) for chromosome in self.chromosomes)

class Organism:
    def __init__(self, name, mutation_prob):
        self.name = name
        self.dna = DNA()
        self.mutation_prob = mutation_prob

    def attempt_mutation(self):
        if random.random() < self.mutation_prob:
            self.dna.mutate()

    def is_all_ones(self):
        return self.dna.is_all_ones()

    def __str__(self):
        return f"{self.name}'s DNA:\n{self.dna}"

def main():
    organism = Organism("Test Organism", mutation_prob=0.5)

    print("Initial DNA:")
    print(organism)
    print("-" * 20)

    generations = 0
    max_generations = 10000 

    # Mutate until DNA becomes all 1s or max_generations is reached
    while not organism.is_all_ones() and generations < max_generations:
        organism.attempt_mutation()
        generations += 1

        # Print progress every 1000 generations
        if generations % 1000 == 0:
            print(f"Generation {generations}... Still mutating...")

    print("\nFinal DNA:")
    print(organism)

    if organism.is_all_ones():
        print(f"\nSuccess! It took {generations} generations for the DNA to mutate to all 1s.")
    else:
        print("\nStopped after reaching the maximum number of generations without success.")

if __name__ == "__main__":
    main()
