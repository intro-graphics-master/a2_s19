# Assignment #2

The files here will animate the spinning cube example from chapter four of your textbook.  Only get the files from here, not your textbook's site, because we've modified them to make them easier to explain.

Like the previous assignment, this one will be quick, illustrative, and pretty limited in scope; you'll merely edit some lists of points and colors again.  This time, you're paying more attention to designing something. 

You're also paying a whole lot more attention to the surrounding program.  If you do the extra credit, you'll get an impression of what WebGL programming is like for most people, which can be rather tedious.  Each change to your scene (such as creating a new shape) involves carefully editing code in several places instead of just one.  The next assignment will provide a nicer way than this.

## Step 1:  Begin with repository setup:

1. By now you have followed a link to create this assignment repository, which must look like **a2-githubusername**.  Don't generate it more than once.

2. Copy this repository to your computer as you did last time.  Find the big green button on the page that says "Clone or download", and either activate GitHub Desktop or just download it as a .zip.

## Step 2:  Test run your project.  

1. Go to your folder.

   ![icons](docs/image-01.png)
 
2.  Click open "host.bat" or "host.command" to run the host as you did before.

3.  Open a new browser window to "localhost:8000".

4.  You should see a spinning cube animation.  If not, check the error console and ask on Piazza.

  ![icons](docs/image-01.png)

## Step 3:  Enable editing

1.  Press F12 (Windows) or Cmd+Option+i (Mac) to open the Chrome developer tools panel (DevTools).

2.  Re-do all the step from assignment 1 that gives Chrome permission to edit your folder.  It's not the same folder as you used for assingment 1, so you'll need to drag your assignment 2 folder into the coding area and then tell Chrome "allow" when it asks for permissions for it.

  ![icons](docs/image-01.png)

3.  You should now see green dots next to the file "index.html" as well as the four ".js" files.  

  Note:  If not, repeat assignment 1 stuff until it works, or even remove your old (assignment 1) folder from the list of workspaces if necessary. Under the "filesystem" tab under Sources, right click your old folder and say "Remove folder from workspace".   Then, drag your assignment 2 folder into the coding area instead so that it maps correctly.

4.  Open "cube.js" under the Sources tab.  This is the main file you'll be editing (the other one is index.html).
  
  ![icons](docs/image-01.png)
  
5.  Test that editing the code of "cube.js" works.  Delete a "{" or something important somewhere in the source code and refresh the page with ctrl+F5 (Windows) or cmd+F5 (Mac).  Verify that the animation has stopped working.  If so, editing works and you can do the assignment.  If not, keep messing with the above steps.

  ![icons](docs/image-01.png)
  
## Step 4: Edit the code (graded part)

### Part 1:  Build a geometric shape.

(10 points)

Near the top of "cube.js" there is a variable called vertexPositions.  It's a JavaScript array that fills itself with a vector type (vec4) to describe where the points of the cube are.  A cube has 8 corners.  Here there are 36 points instead of just 8, because a lot of repetition is going on.  The points are listed in order of how triangles should connect them, so every three points is one triangle.  Each cube corner gets touched by several triangles (hence the repetition).

Follow these steps to correctly show a different shape (a certain four sided pyramid).  We will check for this pyramid when we load your page.

1.  Delete all the cube faces except for the rear one (z = 0.5).  This leaves just a square.  Produce a four sided pyramid instead.  Add four new triangles that connect each side of this remaining square to the point ( x = 0, y = 0, z = -0.5 ).  If you have to, draw it out on paper and label points to get it right.

2.  Update the variable NumVertices to match what you changed.

3.  Overwrite the variable vertexColors to have the same list of vec4 values as vertexPositions has.  This will set all the colors to values that directly come from spatial position.  X coordinate will affect red intensity, Y affects green, Z affects blue.

4.  Reload the page.  You should see this:

  ![icons](docs/image-01.png)

### Part 2:  Create a visible seam along an edge.


  

  


Because we're defining each triangle's point lists separately, that means the edge from A to B and the edge from B to A actually have nothing in common; they're parts of two different triangles.  It's really more like one edge goes from A to B, and the edge other from C to D, and A and D just happen to overlap in the same spot in 3D space but they don't know about each other; likewise for B and C overlapping. 



### Part 3 (Extra credit):

(10 bonus points)


   
   
## Step 5:  Continue the next steps to turn in assignment 2 on CCLE:

1.  Zip up all your files (except for the "docs" folder, please leave that out) in a single .zip file, which you will name after your student UID.  Turn in your .zip on CCLE, where we will add a place to do so.

2.  You can push your changes to GitHub too if you want.  Or you can just keep your repo copy local to your machine.  Either way, it can be helpful to commit your code to your repo whenever it works, so you can always go back to that state using GitHub desktop's buttons, or easily see what changes you've made since then.
