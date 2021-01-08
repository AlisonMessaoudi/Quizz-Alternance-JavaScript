// DONNÉES GENERALES
        
$(document).ready(function(){
    
    // TABLEAU DES QUESTIONS

        const questions = [{

            // QUESTION 1
            'titre': 'Question 1 :', 
            'question': "Tu cherches quelqu'un de créatif ?", 
            'reponse1': 'Oh oui !', 
            'reponse2': 'Peut-être, bien', 
            'reponse3': 'Non, pas vraiment ', 
            'bonnereponse': 'Oh oui !',
            },

            // QUESTION 2
            {
            'titre': 'Question 2 :', 
            'question': "Tu cherches quelqu'un d'organiser ?",
            'reponse1': 'Certainement',
            'reponse2': 'Pas plus que ça',
            'reponse3': 'Ah oui !',
            'bonnereponse': 'Ah oui !',
            },

            // QUESTION 3
            {
            'titre': 'Question 3 :',  
            'question': "Tu cherches une alternante ?",
            'reponse1': "Non, un électricien ?",
            'reponse2': "C'est quoi le web",
            'reponse3': "Oui, on signe où ?",
            'bonnereponse': "Oui, on signe où ?",
            }]; 

    // INITIALISATION DES VARIABLES

        var i = 0;
        // compteur de question, initialisation du compteur à 1 puisqu'on commence par la question 1
        var nbrQuestions = questions.length; 
        // création d'une variable nbrQuestions qui a pour valeur la longueur de la liste de "Questions"
        var score = 0; 
        // initialisation du score à 0

        
    // GÉNÉRER LA QUESTION SELON i
        function genererQuestion(i) {
                
            if (i< nbrQuestions) { 
                // si j est strictement = i 
                $('.resultat').css('display','none');
                // on cache le resultat
                $('.prevNext').css('display','none');
                // on cache prevNext
                $('.ensavoirplus').css('display','none');
                // on cache ensavoirplus
                $('.image').css('display','block');
                // on cache image
                $('.titre').html('<p><i class="fas fa-bookmark"></i>&nbsp;&nbsp;</p>' + questions[i].titre); 
                // alors on récupère la question
                $('.question').text(questions[i].question); 
                // alors on récupère la question
                $('.reponse1').html(questions[i].reponse1); 
                // alors on récupère la reponse1
                $('.reponse2').text(questions[i].reponse2); 
                // alors on récupère la reponse2
                $('.reponse3').text(questions[i].reponse3); 
                // alors on récupere la reponse3

            
            } 

        // TERMINER LE QUIZZ

            else {
                // si la boucle genererQuestion est terminé
                $('.resultat').css('display','none');
                // alors resultat disparait
                $('.prevNext').css('display','none');
                // alors resultat disparait
                $('.titre').css('display','none');
                // alors resultat disparait
                $('.question').css('display','none');
                // alors resultat disparait
                $('.reponses').css('display','none');
                // alors resultat disparait
                
                
                if (score <=1) {
                    $('#score').fadeIn(500);
                    $('#score').css({
                        backgroundColor: '#BF3B3B',
                        color: '#392699'
                    });
                    $('#score').html('Zut, tu as obtenu &nbsp;' + score + '&nbsp;/&nbsp;' + nbrQuestions); 
                    $('.message').fadeIn(500);
                    $('.message').css({
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '25px',
                        fontWeight: 'bold',
                        padding: '30px 0'
                    });
                    $('.message').html ("On en discute pour te faire changer d'avis !?");
                    $('.ensavoirplus').fadeIn(500);
                }       
                    
                else if (score == 2){
                    $('#score').fadeIn(500);
                    $('#score').css({
                        backgroundColor: '#FFCE00',
                        color: '#392699'
                    });
                    $('#score').html('Bravo tu as obtenu &nbsp;' + score + '&nbsp;/&nbsp;' + nbrQuestions); 
                    $('.message').fadeIn(500);
                    $('.message').css({
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '25px',
                        fontWeight: 'bold',
                        padding: '20px 0'
                    });
                    $('.message').html("Presque convaincu ! On se rencontre pour en discuter !?");
                    $('.ensavoirplus').fadeIn(500);
                }      
                    
                else {
                    $('#score').fadeIn(500);
                    $('#score').css({
                        backgroundColor: '#FFCE00',
                        color: '#392699'
                    });
                    $('#score').html('Bravo tu as obtenu &nbsp;' + score + '&nbsp;/&nbsp;' + nbrQuestions);
                    $('.message').fadeIn(500);
                    $('.message').css({
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '25px',
                        fontWeight: 'bold',
                        padding: '20px 0'
                    });
                    $('.message').html("Super ! Il est temps qu'on se rencontre, non !?");
                    $('.ensavoirplus').fadeIn(500);
                }  
            
            };     
    
        }           
    
    // COMMENCER

        $('#commencer').on('click', function() {        // lorsque je clic sur '#commencer' alors #quizz s'affiche (display block) et '#demarrer' s'efface                                       
            $('#demarrer').fadeOut(500);                // on cache avec effet disparition (fadeOut)
            $('#quizz').fadeIn(500);                    // on affiche avec effet apparition (fadeIn)
            genererQuestion(i)
        });

    // VÉRIFIER LA RÉPONSE
            
        $('.reponse').on('click', function() {
            var reponseUtilisateur = $(this).text();
            $('.prevNext').fadeIn(500);  
            if (reponseUtilisateur == questions[i].bonnereponse){ 
                $('.resultat').html('<div>Bravo tu as trouvé !&nbsp;&nbsp;<i class="fas fa-check-circle"></i></div>');
                $('.resultat').fadeIn(500);  
                $('.resultat').css({
                    backgroundColor:'#FFCE00',
                    paddingTop: '13px',
                    color: '#392699',
                    fontWeight: 'bold'
                });
                score ++;
            }   
            
            else {
                $('.resultat').html('<div>Zut, tu n\'as pas trouvé !&nbsp;&nbsp;<i class="fas fa-times-circle"></i></div>');
                $('.resultat').fadeIn(500); 
                $('.resultat').css({
                    backgroundColor:'#BF3B3B',
                    paddingTop: '13px',
                    color: '#392699',
                    fontWeight: 'bold'
                });
                $('.bonnereponse').css('backgroundColor','green');
            }   
        
        })      

    // PASSER À LA QUESTION SUIVANTE

        $('.next').on('click', function() {        
            i++;                                   
            genererQuestion(i);                    
        
        });     
    
    });         