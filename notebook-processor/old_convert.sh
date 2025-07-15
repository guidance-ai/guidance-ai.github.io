#!/bin/bash

# Initialize variables
NOTEBOOK=$1
OUTPUT_DIR="../guidance-website/public/notebooks"
MODE="default"  # Default mode

# Check that the notebook name is provided
if [ -z "$NOTEBOOK" ]; then
    echo "Error: No notebook file specified."
    echo "Usage: $0 notebook_path [--mode widget]"
    exit 1
fi

# Resolve OUTPUT_DIR to an absolute path for clarity
OUTPUT_DIR=$(realpath "$OUTPUT_DIR")

# Parse optional arguments
shift  # Shift past the notebook argument
while [[ $# -gt 0 ]]; do
    case $1 in
        --mode)
            MODE=$2
            shift 2
            ;;
        *)
            echo "Error: Unknown argument $1"
            echo "Usage: $0 notebook_path [--mode widget]"
            exit 1
            ;;
    esac
done

# Ensure the output directory exists (does not remove existing content)
mkdir -p "$OUTPUT_DIR"

# Check if the notebook file exists
if [ -f "$NOTEBOOK" ]; then
    echo "Converting $NOTEBOOK to HTML..."
    if [ "$MODE" == "widget" ]; then
        # Notebooks with widgets have to be executed
	# NOTE: You can pass --debug to jupyter nbconvert for more details.
        jupyter nbconvert --to html --template=custom_template --execute "$NOTEBOOK" --ExecutePreprocessor.timeout=60
    elif [ "$MODE" == "default" ]; then
        jupyter nbconvert --to html --template=custom_template "$NOTEBOOK"
    else 
        echo "Error: Unknown mode $MODE"
        exit 1
    fi
else
    echo "Error: Notebook not found at $NOTEBOOK"
    exit 1
fi

# Move generated HTML files to the output directory
for html_file in ./*.html; do
    if [ -f "$html_file" ]; then
        echo "Moving $html_file to $OUTPUT_DIR/"
        mv "$html_file" "$OUTPUT_DIR/"
    fi
done

echo "Notebook has been converted and moved to $OUTPUT_DIR/"
