# Notes for《D3.js in Action, 3rd Edition》



## 1. Profiles

![D3.js in Action 3rd Edition](assets/cover.png)

|    **Title**    | **D3.js in Action, Third Edition** [[buy](https://www.manning.com/books/d3js-in-action-third-edition)] |
| :-------------: | :----------------------------------------------------------: |
|   **Author**    |             **Elijah Meeks, Anne-Marie Dufour**              |
| **Publication** |              **Manning, MEAP began April 2022**              |
|    **Pages**    |                    **525 *(estimated)***                     |

> > **Introduction**
>
> **Create stunning web-based data visualizations with D3.js. This totally-revised new edition of D3.js in Action guides you from simple charts to powerful interactive graphics.**
>
> In ***D3.js in Action, Third Edition*** you will learn how to:
>
> - Set up a local development environment for `D3`
> - Include `D3` in web development projects, including Node-based web apps
> - Select and append `DOM` elements
> - Size and position elements on screen
> - Assemble components and layouts into creative data visualizations
>
>***D3.js in Action, Third Edition*** teaches you how to create an extensive portfolio of visualizations, interactive graphics, and data-driven applications using `D3.js`. This third edition is fully updated to the latest version of `D3`. It also contains new coverage of the essential aspects of modern digital visualizations. Brand new chapters dive into interactive visualizations, provide new strategies for responsiveness in web-based dataviz, and demonstrate how to improve accessibility.
> 
>> **about the technology**
> 
>`D3.js` is the powerful `JavaScript` library behind the most innovative and sophisticated data visualizations on the web today. It provides a simple but powerful data visualization `API` over `HTML`, `CSS`, `SVG`, and `Canvas`. Start with a structure, dataset, or algorithm. Mix in `D3`, and you can programmatically generate static, animated, or interactive images that scale to any screen or browser. You'll be blown away by how beautiful your results can be!
> 
>> **about the book**
> 
>***D3.js in Action, Third Edition*** is an extensive update to Manning's bestselling guide to data visualization. It smoothes the steep learning curve of `D3.js`, helping you gradually progress through fundamental concepts until you can build any visualization you can imagine! You'll assemble an impressive portfolio, from simple bar charts to intricate networks and maps. Along the way, you'll pick up best practices for building interactive graphics, animations, and integrating your work into frontend development frameworks like React and Svelte.
> 
>> **about the reader**
> 
>Suitable for web developers with `HTML`, `CSS`, and `JavaScript` skills. No specialized data science skills required.
> 
>> **about the author**
> 
>**Elijah Meeks** is a co-founder and Chief Innovation Officer of Noteable, a startup focused on evolving how we analyze and communicate data. He is known for his pioneering work while at Stanford, where he was the technical lead for acclaimed works like ORBIS and Kindred Britain, as well as being Netflix's first Senior Data Visualization Engineer.
> 
>**Anne-Marie Dufour** is a data visualization developer with a background in computation fluid dynamics and mechanical engineering. She loves breaking down complex subjects into digestible and applicable bits.



## 2. Outlines

Status available：:heavy_check_mark: (Completed) | :hourglass_flowing_sand: (Working) | :no_entry: (Not Started) | :orange_book: (Finished reading)

| No.  |                Chapter Title                 |    Status     |
| :--: | :------------------------------------------: | :-----------: |
| Ch00 |             [Welcome](./Ch00.md)             | :orange_book: |
|      |        **PART 1: D3.JS FUNDAMENTALS**        |               |
| Ch01 |    [AN INTRODUCTION TO D3.JS](./Ch01.md)     | :orange_book: |
| Ch02 |      [MANIPULATING THE DOM](./Ch02.md)       | :orange_book: |
| Ch03 |        [WORKING WITH DATA](./Ch03.md)        | :orange_book: |
| Ch04 |        DRAWING LINES, CURVES AND ARCS        |  :no_entry:   |
| Ch05 |          VISUALIZING DISTRIBUTIONS           |  :no_entry:   |
| Ch06 | INTEGRATING D3 IN AN INTERACTIVE APPLICATION |  :no_entry:   |
|      |   **PART 2: INTRICATE DATA VISUALIZATIONS    |               |
| Ch07 |         HIERARCHICAL VISUALIZATIONS          |  :no_entry:   |
| Ch08 |            NETWORK VISUALIZATIONS            |  :no_entry:   |
| Ch09 |    GEOSPATIAL INFORMATION VISUALIZATIONS     |  :no_entry:   |
|      |      **PART 3: MEET THE NEW STANDARDS**      |               |
| Ch10 |          INTERACTIVE VISUALIZATIONS          |  :no_entry:   |
| Ch11 |          RESPONSIVE VISUALIZATIONS           |  :no_entry:   |
| Ch12 |          ACCESSIBLE VISUALIZATIONS           |  :no_entry:   |
|      |       **PART 4: ADVANCED TECHNIQUES**        |               |
| Ch13 |        WRITING LAYOUTS AND COMPONENTS        |  :no_entry:   |
| Ch14 |             MIXED MODE RENDERING             |  :no_entry:   |



Powershell script for generating markdown files in batch:

```powershell
# Create 14 empty markdown files named Ch##.md:
for($i=1; $i -le 14; $i=$i+1){ New-Item -Name "Ch$('{0:d2}' -f $i).md"; }
```

 
