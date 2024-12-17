import random

class Cell:
    def __init__(self, x, y, is_alive):
        self.x = x
        self.y = y
        self.is_alive = is_alive

    def __str__(self):
        if self.is_alive:
            return 'O'  # Alive cell 'O'
        else:
            return '.'  # Dead cell

class Grid:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = []
        for i in range(self.height):
            row = []
            for j in range(self.width):
                new_cell = Cell(x=j, y=i, is_alive=random.choice((True, False)))
                row.append(new_cell)
            self.grid.append(row)

    def get_neighbors(self, cell):
        neighbors = []

        # Check all 8 possible neighbors (dx, dy) = (-1, 0, 1)
        for dx in range(-1, 2):
            for dy in range(-1, 2):
                if dx == 0 and dy == 0:  # Skip the cell itself
                    continue
                
                neighbor_x = cell.x + dx
                neighbor_y = cell.y + dy

                # Ensure the neighbor is within bounds
                if 0 <= neighbor_x < self.height and 0 <= neighbor_y < self.width:
                    neighbors.append(self.grid[neighbor_x][neighbor_y])

        return neighbors

    def display_grid(self):
        for row in self.grid:
            for cell in row:
                print(cell, end=" ")  # Print 'O' for alive and '.' for dead
            print()

    def update(self):
        new_grid = []
        
        for row in self.grid:
            new_row = []
            for cell in row:
                neighbors = self.get_neighbors(cell)
                alive_neighbors = 0
                for neighbor in neighbors:
                    if neighbor.is_alive:
                        alive_neighbors += 1
                new_cell = Cell(cell.x, cell.y, cell.is_alive)

                if cell.is_alive:
                    if alive_neighbors < 2 or alive_neighbors > 3:
                        new_cell.is_alive = False
                elif not cell.is_alive:
                    if alive_neighbors == 3:
                        new_cell.is_alive = True

                new_row.append(new_cell)
            new_grid.append(new_row)

        self.grid = new_grid

    def evaluate_till_end(self):
        updates_count = 0
        previous_grid = None 
        
        # Loop until all cells are either dead or the grid is stable
        while True:
            updates_count += 1
            self.update()
            
            if self.is_stable(previous_grid):
                print(f"Grid is stable. It took {updates_count} updates.")
                break

            previous_grid = self.copy_grid()

            # Check if all cells are dead (no living cells)
            all_dead = all(cell.is_alive == False for row in self.grid for cell in row)
            if all_dead:
                print(f"All cells are dead. It took {updates_count} updates.")
                break

    def is_stable(self, previous_grid):
        if previous_grid is None:
            return False
        
        # Compare the current grid with the previous one
        for i in range(self.height):
            for j in range(self.width):
                if self.grid[i][j].is_alive != previous_grid[i][j].is_alive:
                    return False
        return True

    def copy_grid(self):
        # Create a deep copy of the grid
        return [[Cell(cell.x, cell.y, cell.is_alive) for cell in row] for row in self.grid]


# Test the grid and evaluation
grid = Grid(5, 5)  # Use a grid size of 5x5
print("Initial Grid:")
grid.display_grid()

print("\nLet's evaluate till end:")
grid.evaluate_till_end()

print("\nFinal Grid:")
grid.display_grid()
