import json
def read_large_file(file_name):
    with open(file_name, 'r') as file:
        for line in file:
            yield line

# Using the generator to read the file
lines_gen = read_large_file('large_file.txt')
# Example of processing the file line by line using the generator
for line in lines_gen:
    # Process each line (for demonstration, we'll just print the first 10 lines)
    print(line.strip())
    # You might want to break after a few lines to avoid printing too much
    if "line 10" in line:
        break

# def read_large_file_line_by_line(file_name):
#     with open(file_name, 'r') as file:
#         while True:
#             line = file.readline()
#             if not line:
#                 break
#             # Process the line (for demonstration, we'll print it)
#             print(line.strip())

# # Example usage
# print("Reading with read_large_file_line_by_line:")
# read_large_file_line_by_line('large_file.txt')
