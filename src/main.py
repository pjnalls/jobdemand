import sys

import src.visualize.results as results


if __name__ == "__main__":
    file_path = "data/Table 6.2-Table 1.csv"
    try:
        if len(sys.argv) == 2:
            file_path = sys.argv[1] if 'data' in sys.argv[1] else f"data/{sys.argv[1]}"    
        results.visualize_results(file_path)
    except FileNotFoundError as e:
        print(f"File not found. Please provide a valid file path.")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
