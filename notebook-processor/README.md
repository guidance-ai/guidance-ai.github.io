# How to convert notebooks
First, make a clean run of a notebook in Jupyter to ensure all cells are executed and outputs are generated. Then, place the `*.ipynb` notebook file in the `notebook-processor` folder.

Next, run the `convert_notebook.sh` script to convert the notebook into HTML format. The script will generate an HTML file in the `public/notebooks` directory of the website.

Make sure you have the necessary Python environment activated with jupyter installed. You can reuse your Guidance development environment if you have one set up.

Then, run the script with the following command:

```bash
./convert_notebook.sh your_notebook.ipynb
```

If your notebook uses ipywidgets, you need to run the script with the `--mode=widget` option:

```bash
./convert_notebook.sh your_notebook.ipynb --mode=widget
```

The `--mode=widget` option reruns the notebook dynamically before generating the HTML. Ideally, you should not need to use this option. The Guidance widget should render correctly in the static HTML output, but if you encounter issues, you can also try this option.


# How to edit the HTML template

We are using a tool called `nbconvert` to convert Jupyter notebooks into HTML. `nbconvert` uses a Jinja2 template to specify the structure and style of the output HTML. In order to make the output match the website, we need to override the default CSS styles. The HTML template is located at `custom_template/index.html.j2`.

Modify this file to add styles, then run the conversion script again to see the changes reflected in the generated HTML files.