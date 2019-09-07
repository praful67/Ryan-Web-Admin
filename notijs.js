 firebase.database().ref().child("Profilechanged").on('value', function(snapshot) {
        snapshot.forEach(function(childsnapshot){
            var id = childsnapshot.key;
            var change = childsnapshot.child("changed").val();
            if(change == "yes")
                {
                    notiPC();
                    firebase.database().ref().child("Profilechanged").child(id).child("changed").set('No');

                }
            
        });
    });
 firebase.database().ref().child("ETimeoff").on('value', function(snapshot) {
        snapshot.forEach(function(childsnapshot){
            var id = childsnapshot.key;
            var Updated = childsnapshot.child("Updated").val();
            if(Updated == "yes")
                {
                    notiTO();
                    firebase.database().ref().child("Profilechanged").child(id).child("Updated").set('No');

                }
            
        });
    });
firebase.database().ref().child("EComment").on('value', function(snapshot) {
        snapshot.forEach(function(childsnapshot){
            var id = childsnapshot.key;
            var Updated = childsnapshot.child("Updated").val();
            if(Updated == "yes")
                {
                    notiFC();
                    firebase.database().ref().child("Profilechanged").child(id).child("Updated").set('No');

                }
            
        });
    });

function noti() {    
            var notification='<div id="popup1" class="overlay"><div class="popup1"><h4>Notification</h4><a class="close" href="#">&times;</a><div class="content">Notification Content</div></div></div>'
          document.body.innerHTML += notification;
             window.location.href = "#popup1";
       }
        
function notiPC() {    
            var notification='<div id="popup1" class="overlay"><div class="popup1"><h4>Notification</h4><a class="close" href="#">&times;</a><div class="content"><p>A employee has changed his/her profile , Please Check<p><br></div></div></div>'
          document.body.innerHTML += notification;
             window.location.href = "#popup1";
       }
        
    function notiTO() {    
            var notification='<div id="popup1" class="overlay"><div class="popup1"><h4>Notification</h4><a class="close" href="#">&times;</a><div class="content"><p>A employee has updated his/her Time off , Please Check<p><br></div></div></div>'
          document.body.innerHTML += notification;
             window.location.href = "#popup1";
       }
        
      function notiFC() {    
            var notification='<div id="popup1" class="overlay"><div class="popup1"><h4>Notification</h4><a class="close" href="#">&times;</a><div class="content"><p>A employee has given a Feedback and Comment , Please Check<p><br></div></div></div>'
          document.body.innerHTML += notification;
             window.location.href = "#popup1";
       }
        
    