"use strict";

const url = "https://gsamuelsson.se/projektAPI/webservice.php";
let coursesurl =url+'/courses';
let jobsurl =  url+'/jobs';
let projectsurl = url+'/projects';
//Kurser



function loadCourseList() {


  fetch(coursesurl)
      .then((res) => res.json())
      .then((data) => {
          let output = "";    

          data.forEach(function (course) {
              output += `<tr>
                  <td>${course.name}</td>
                  <td>${course.school}</td>
                  <td>${course.program}</td>
                  <td>${course.points}</td>
                  <td>${course.startyear} - ${course.endyear}</td>
                  <td class="center"><a onclick="editCourse(event)" title='Redigera ${course.name}' target='_blank'><i id="${course.id}" class="fas fa-cog"></i></a> / <a class="delete" onclick="deleteCourse(event)"  title='Ta bort  ${course.name}' target='_blank'> <i id="${course.id}" class="fas fa-trash-alt"></i></a></td>
              </tr>`;
          })
          document.getElementById("courseList").innerHTML = output;
      })
}

//Adding a course
function addCourse() {
    
    let school = document.getElementById("school").value;
    let name = document.getElementById("name").value;
    let startyear = document.getElementById("startyear").value;
    let endyear = document.getElementById("endyear").value;
    let points = document.getElementById("points").value;
    let program = document.getElementById("program").value;

   

        let jsonStr = JSON.stringify({
            "school": school,
            "name": name,
            "startyear": startyear,
            "endyear": endyear,
            "points": points,
            "program": program
        });



        fetch(coursesurl, {
            method: 'POST',
            mode: 'cors',
           
            body: jsonStr
        }).then((res) => res.json())
            .then((data) => location.reload(true))
           
    }



    function editCourse(event) {
        let space = document.getElementById('modalspace');
        var modal = document.getElementById("myModal");
        var innermodal = document.getElementById("innermodal");
 

        modal.style.display = "flex";
       
        let id = event.target.id;

        console.log(id);

        
    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
      modal.style.display = "none";
    }
    

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    let oneUrl = coursesurl + '/' + id;

    fetch(oneUrl)

      .then((res) => res.json())
      .then((data) => {
          

          data.forEach(function (course) {
            let name = course.name;
            let program = course.program;
            let school = course.school;
            let startyear = course.startyear;
            let endyear = course.endyear;
            let points = course.points;

            innermodal.innerHTML = `<section>
    <h2><i class="fa fa-cog"></i> Ändra kurs</h2>
  
   
    <label >
        Kursnamn: <br>
        <input type="text" name="nameedit" id="nameedit" value="${name}" required/>
    </label>
     <label>
        Skola: <br>
        <input type="text" name="schooledit" id="schooledit" value="${school}" required/>
    </label>
    <label>
        Poäng: <br>
        <input type="text" name="pointsedit" id="pointsedit" value="${points}" required/>
    </label>
    <label >
        Program (eller fristående): <br>
        <input type="text" name="programedit" id="programedit" value="${program}" required/>
    </label>
    <label>
    Startår: <br>
    <input type="text" name="startedit" id="startedit" value="${startyear}" required/>
</label>
<label >
    Slutår (eller pågående): <br>
    <input type="text" name="endedit" id="endedit" value="${endyear}" required/>
</label>
    <input type="submit" value="Ändra" onclick="editCourses(${course.id})"  id="editbutton" class="btn btn-blue">
</section>`;


                  
          })
          
      })
    }

// Delete course
    function deleteCourse(event) {
        let id = event.target.id;


        let deleteUrl = coursesurl + '/' + id;

        console.log(deleteUrl);

         fetch(deleteUrl, {
             method: 'DELETE',
           
        }).then((res) => res.json())
            .then((data) => location.reload(true))
    }


    function editCourses(id) {

        console.log(id);
        let startyear = document.getElementById("startedit").value;
        let name = document.getElementById("nameedit").value;
        let endyear = document.getElementById("endedit").value;
        let program = document.getElementById("programedit").value;
        let school = document.getElementById("schooledit").value;
        let points = document.getElementById("pointsedit").value;
    
    
    
            let jsonStr = JSON.stringify({
                "startyear": startyear,
                "name": name,
                "endyear": endyear,
                "program": program,
                "school": school,
                "points": points,
                "id": id
            });
    
    
    console.log(jsonStr);
            fetch(coursesurl, {
                method: 'PUT',
               
                body: jsonStr
            }).then((res) => res.json())
                .then((data) => location.reload(true))
               
        }
        

    

// ----------------------------------Jobs----------------------------------


// Loading job list
function loadJobList() {
 
  fetch(jobsurl)
      .then((res) => res.json())
      .then((data) => {
          let output = "";    

          data.forEach(function (job) {
              output += `<tr>
                  <td>${job.title}</td>
                  <td>${job.place}</td>
                
                  <td>${job.startyear} - ${job.endyear}</td>
                  <td class="center"><a onclick="editJob(event)" title='Redigera ${job.title}' target='_blank'><i id="${job.id}" class="fas fa-cog"></i></a> / <a class="delete" onclick="deleteJob(event)"  title='Ta bort  ${job.title}' target='_blank'> <i id="${job.id}" class="fas fa-trash-alt"></i></a></td>
              </tr>`;
          })
          document.getElementById("courseList").innerHTML = output;
      })
}

//Adding a job
function addJob() {
    
    let title = document.getElementById("title").value;
    let place = document.getElementById("place").value;
    let startyear = document.getElementById("startyear").value;
    let endyear = document.getElementById("endyear").value;


   

        let jsonStr = JSON.stringify({
            "title": title,
            "place": place,
            "startyear": startyear,
            "endyear": endyear,
  
     
        });



        fetch(jobsurl, {
            method: 'POST',
            mode: 'cors',
           
            body: jsonStr
        }).then((res) => res.json())
            .then((data) => location.reload(true))
           
    }



    function editJob(event) {
        let space = document.getElementById('modalspace');
        var modal = document.getElementById("myModal");
        var innermodal = document.getElementById("innermodal");
 

        modal.style.display = "flex";
       
        let id = event.target.id;

     

        
    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
      modal.style.display = "none";
    }
    

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    let oneUrl = jobsurl + '/' + id;

    fetch(oneUrl)
      .then((res) => res.json())
      .then((data) => {
          

          data.forEach(function (job) {
            let title = job.title;
            let place = job.place;
            let startyear = job.startyear;
            let endyear = job.endyear;

            innermodal.innerHTML = `<section>
    <h2><i class="fa fa-cog"></i> Ändra jobb</h2>
  
   
    <label >
        Jobbtitel: <br>
        <input type="text" name="titleedit" id="titleedit" value="${title}" required/>
    </label>
     <label>
        Arbetsplats: <br>
        <input type="text" name="placeedit" id="placeedit" value="${place}" required/>
    </label>
    <label>
        Startår: <br>
        <input type="text" name="startedit" id="startedit" value="${startyear}" required/>
    </label>
    <label >
        Kursplan: <br>
        <input type="text" name="endedit" id="endedit" value="${endyear}" required/>
    </label>
    <input type="submit" value="Ändra" onclick="editJobs(${job.id})"  id="editbutton" class="btn btn-blue">
</section>`;

                  
          })
          
      })
    }


    function deleteJob(event) {
        let id = event.target.id;


        let deleteUrl = jobsurl + '/' + id;

        console.log(deleteUrl);

         fetch(deleteUrl, {
             method: 'DELETE',
           
        }).then((res) => res.json())
            .then((data) => location.reload(true))
    }


    function editJobs(id) {

        let title = document.getElementById("titleedit").value;
    let place = document.getElementById("placeedit").value;

    let startyear = document.getElementById("startedit").value;
    let endyear = document.getElementById("endedit").value;
    
    
    
            let jsonStr = JSON.stringify({
                "title": title,
                "place": place,
                "startyear": startyear,
                "endyear": endyear,
             
                "id": id
            });
    
    
    console.log(jsonStr);
            fetch(jobsurl, {
                method: 'PUT',
                mode: 'cors',
               
                body: jsonStr
            }).then((res) => res.json())
                .then((data) => location.reload(true))
               
        }
        




// ----------------------------------Project----------------------------------

function loadProjectList() {
 
    fetch(projectsurl)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    
  
            data.forEach(function (project) {
                output += `<tr>
                    <td>${project.title}</td>
                    <td>${project.description}</td>
                    <td>${project.url}</td>
                    <td>${project.keywords}</td>
                    <td>${project.img}</td>
                    <td>${project.imgmobile}</td>
                  
                    <td class="center"><a onclick="editProject(event)" title='Redigera ${project.title}' target='_blank'><i id="${project.id}" class="fas fa-cog"></i></a> / <a class="delete" onclick="deleteProject(event)"  title='Ta bort  ${project.title}' target='_blank'> <i id="${project.id}" class="fas fa-trash-alt"></i></a></td>
                </tr>`;
            })
            document.getElementById("courseList").innerHTML = output;
        })
  }
  
  //Adding a project
  function addProject() {
      
      let title = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let urlweb = document.getElementById("urlweb").value;
      let img = document.getElementById("img").value;
      let imgmobile = document.getElementById("imgmobile").value;
      let keywords = document.getElementById("keywords").value;
  
  
     
  
          let jsonStr = JSON.stringify({
              "title": title,
              "description": description,
              "url": urlweb,
              "img": img,
              "imgmobile": imgmobile,
              "keywords": keywords
       
          });
  
  
  
          fetch(projectsurl, {
              method: 'POST',
              mode: 'cors',
             
              body: jsonStr
          }).then((res) => res.json())
              .then((data) => location.reload(true))
             
      }
  
  
  
      function editProject(event) {
          let space = document.getElementById('modalspace');
          var modal = document.getElementById("myModal");
          var innermodal = document.getElementById("innermodal");
   
  
          modal.style.display = "flex";
         
          let id = event.target.id;
  
          
      var span = document.getElementsByClassName("close")[0];
  
  
      span.onclick = function() {
        modal.style.display = "none";
      }
      
  
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
  
      let oneUrl = projectsurl + '/' + id;
  
      fetch(oneUrl)
        .then((res) => res.json())
        .then((data) => {
            
  
            data.forEach(function (project) {
              let title = project.title;
              let description = project.description;
              let urlweb = project.url;
              let img = project.img;
              let imgmobile = project.imgmobile;
              let keywords = project.keywords;
  
              innermodal.innerHTML = `<section>
      <h2><i class="fa fa-cog"></i> Ändra kurs</h2>
    
     
      <label >
          Titel: <br>
          <input type="text" name="titleedit" id="titleedit" value="${title}" required/>
      </label>
       <label>
          Kurskod: <br>
          <input type="text" name="descriptionedit" id="descriptionedit" value="${description}" required/>
      </label>

      <label >
         URL: <br>
          <input type="text" name="urlwebedit" id="urlwebedit" value="${urlweb}" required/>
      </label>
      <label >
      Keywords: <br>
       <input type="text" name="keywordsedit" id="keywordsedit" value="${keywords}" required/>
   </label>
   <label >
   Bild: <br>
    <input type="text" name="imgedit" id="imgedit" value="${img}" required/>
</label>
<label >
Keywords: <br>
 <input type="text" name="imgmobileendedit" id="imgmobileedit" value="${imgmobile}" required/>
</label>
      <input type="submit" value="Ändra" onclick="editProjects(${project.id})"  id="editbutton" class="btn btn-blue">
  </section>`;
  
                    
            })
            
        })
      }
  
  
      function deleteProject(event) {
          let id = event.target.id;
  
  
          let deleteUrl = projectsurl + '/' + id;
  
          console.log(deleteUrl);
  
           fetch(deleteUrl, {
               method: 'DELETE',
             
          }).then((res) => res.json())
              .then((data) => location.reload(true))
      }
  
  
      function editProjects(id) {
  
   
          let title = document.getElementById("titleedit").value;
          let description = document.getElementById("descriptionedit").value;
          let urlweb = document.getElementById("urlwebedit").value;
          let keywords = document.getElementById("keywordsedit").value;
          let img = document.getElementById("imgedit").value;
          let imgmobile = document.getElementById("imgmobileedit").value;
      
              let jsonStr = JSON.stringify({
                  "title": title,
                  "description": description,
                  "url": urlweb,
                  "keywords": keywords,
                  "img": img,
                  "imgmobile": imgmobile,
                  "id": id
              });
      
      

              fetch(projectsurl, {
                  method: 'PUT',
                  mode: 'cors',
                 
                  body: jsonStr
              }).then((res) => res.json())
                  .then((data) => location.reload(true))
                 
          }
          