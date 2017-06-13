var $todo=document.getElementById('todo'); //la variable récupère la saisie du input HTML via l'id"todo"
var $todoList=document.getElementById('todo_list');//la variable récupère les info stocker dans "id" donc dans la liste "ul"
var $btn=document.getElementById('ok');//la variable récupère le bouton ok dans le HTML

/*--------------------------------------------------------------------------------------------------------------*/


document.getElementById('todo').focus();//met le curseur dans le input a l'ouverture de la page HTML

/*--------------------------------------------------------------------------------------------------------------*/


document.getElementById("todo").addEventListener("keypress", myFunction);
function myFunction() {
    document.getElementById("todo").style.backgroundColor = "red";
}// pour ajouter la couleur quand l'on tape dans la zone input
/*--------------------------------------------------------------------------------------------------------------*/

function createTodo(todo)
{//création de la fonction qui crée le nouvel élément

      var $li=document.createElement('li');// la variable créer un nouvel élément "li"
      var $span=document.createElement('span');//la variable crée un nouvel élément span
      $span.innerText=todo;//le "span" récupère l'élément saisi dans la variable todo

      $todoList.appendChild($li);//l'on ditque la variable crée "$li" est enfant de "$todoList"donc de "ul"
      $li.appendChild($span);//l'on ditque la variable crée "$span" est enfant de ""$li"
      var $btnEdit=document.createElement('button');//la variable créer un nouvel élément "button"
      $btnEdit.innerText='Edit';//on assigne le texte affiché sur le bouton

      var valider = document.createElement('button');
      valider.value = "valider";
      valider.type = "button";
      valider.textContent = "valider";
      //$li.replaceChild(valider, $btnEdit);



      $btnEdit.onclick=function()
      {//la variable "$btnEdit" avec l'évènement".onclick" lance la fonction
        valider.style.display="inline";//réaffiche le boutton valider en édite
        $btnEdit.style.display="none";//cache le boutton édite en édite
        var input = document.createElement('input');// créer la variable input
        input.type = "text";//dire que le type input est du texte
        input.value = $span.textContent;// pour dire que la valeur input  reçoit la valeur span précédant
        input.id = "focus";// dire que input reçoit id focus
        $span.parentNode.replaceChild(input, $span);//pour créer une fonction qui dit de remplacer l'enfant du parent de span

        $li.append(valider);//affiche le bouton valider

          valider.onclick=function(){//valider avec l'action onclick lance la fonction
            $span.innerText = input.value;// $span reçois la valeur input
            input.parentNode.replaceChild($span, input);//on remplacele input par le $span
            valider.style.display="none";//fait disparaitre le bouton valider lors que l'on a cliqué dessus
            $btnEdit.style.display="inline";//réaffiche le boutton édite quand on sort de édite
          }
        document.getElementById('focus').focus();//assigner le focus sur le input créé

        compteur();//appel de la fonction suite a Edite
      }

      var $btnSupp=document.createElement('button');//la variable créer un nouvel élément "button"
      $btnSupp.innerText='Supp';//on assigne le texte affiché sur le bouton

      $btnSupp.onclick=function()
      {//la variable "$btnSupp" avec l'évènement".onclick" lance la fonction
        this.parentNode.remove();//this est l'élément en cours d'utilisation dans la fonction : parentNode x2 pour accéder a son parent supérieur exemple x3 le 3 ème parent au dessus: remove pour suprimer celui-ci
        compteur();//appel de la fonction suite a supression
      }


        $li.append($btnEdit,$btnSupp); //Affiche le boutton pour supprimer qui appartien a la balise span créer

      compteur();//appel de la fonction suite a un ajout
}

/*--------------------------------------------------------------------------------------------------------------*/
window.addEventListener("keydown", function (event) {

  if (event.keyCode == 13) {
    // pour assigner a la touche entrée une validation du form (on a été obligé d'enlever les balise form dans le HTML)
    assigner();
  }
});

/*--------------------------------------------------------------------------------------------------------------*/


$btn.addEventListener("click", assigner);//la variable "$btn"avec l'évènement ".addEventListener" et le rappel de la fonction "assigner" et "click" lance la fonction
function assigner()//créer la fonction "assigner"  qui applique le "click"
{
     if($todo.value!="")// on utilise "if" pour tester si la valeur $todo est différent de rien
     {
      createTodo($todo.value);//la function createTodo resoit la valeur de la variable "$todo"
      $todo.value="";//on demande que la valeur $todo revienne a rien
     }else
     {
      alert("Veuillez saisir dans le champs");//on créer une alerte si la valeur de $todo est vide
     }
    $todo.focus();//met le curseur dans le input après ajout ou alerte
 }

/*--------------------------------------------------------------------------------------------------------------*/

function compteur()
{//créer fonction compteur
  var liCount=$todoList.children.length;// créer la variable "licount" qui resoit le nombre d'élément enfant de "la variable $todoList" donc "ul"
  document.getElementById('pTotal').innerHTML= liCount;//on écrit dans la page HTML ou ce trouve l'"id (pTotal)" la varible "licount"
}
