//Executa os códigos ao pressionar qualquer tecla
addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (e) {
      //Sobe a data e hora
      this.document.getElementById("infos").style.animation = "moveUp .3s ease-in"

      //Faz a data e hora desaparecer e aplica a animação do blur no background em .2s
      function blockWindow(){
        document.getElementById("infos").style.visibility = "hidden"
        document.getElementById("front").style.animation = "blur 1.5s ease-in"
      }
      this.setTimeout(blockWindow, 100*2)


      //Fixa o blur no background em 1 segundo
      function onBlur(){
        document.getElementById("front").style.filter = "blur(9px)"
      }
      this.setTimeout(onBlur, 1000*1)

      //Exibe a tela de Login em .5s
      function viewLogin(){
        document.getElementById("login").style.display = "block"
        document.getElementById("senha").focus()
      }
      this.setTimeout(viewLogin, 100*5)

      //Faz o login desaparecer em 39s
      function offLogin(){
        document.getElementById("login").style.display = "none"
      }
      this.setTimeout(offLogin, 1000*39)

      //Retira a Animação do blur em 39s
      function offBlurAnimate(){
        document.getElementById("front").style.animation = "osda 1.5s ease-in"
      }

      this.setTimeout(offBlurAnimate, 1000*39)

      //Faz a data e hora descer em 40s
      function down(){
        this.document.getElementById("infos").style.animation = "moveDown .3s ease-in"
      }
      this.setTimeout(down, 1000*40)

      //Faz a data e hora ficarem visíveis em 40s
      function openWindow(){
        document.getElementById("infos").style.visibility = "visible"
      }
      this.setTimeout(openWindow, 1000*40)

      //Retira o blur do background em 39s
      function offBlur(){
        document.getElementById("front").style.filter = "blur(0px)"
      }
      this.setTimeout(offBlur, 1000*39)
    }

  });


  function clickActive(){
    //Sobe a data e hora
    this.document.getElementById("infos").style.animation = "moveUp .3s ease-in"

    //Faz a data e hora desaparecer e aplica a animação do blur no background em .2s
    function blockWindow(){
      document.getElementById("infos").style.visibility = "hidden"
      document.getElementById("front").style.animation = "blur 1.5s ease-in"
    }
    this.setTimeout(blockWindow, 100*2)


    //Fixa o blur no background em 1 segundo
    function onBlur(){
      document.getElementById("front").style.filter = "blur(9px)"
    }
    this.setTimeout(onBlur, 1000*1)

    //Exibe a tela de Login em .5s
    function viewLogin(){
      document.getElementById("login").style.display = "block"
      document.getElementById("senha").focus()
    }
    this.setTimeout(viewLogin, 100*5)

    //Faz o login desaparecer em 39s
    function offLogin(){
      document.getElementById("login").style.display = "none"
    }
    this.setTimeout(offLogin, 1000*39)

    //Retira a Animação do blur em 39s
    function offBlurAnimate(){
      document.getElementById("front").style.animation = "osda 1.5s ease-in"
    }

    this.setTimeout(offBlurAnimate, 1000*39)

    //Faz a data e hora descer em 40s
    function down(){
      this.document.getElementById("infos").style.animation = "moveDown .3s ease-in"
    }
    this.setTimeout(down, 1000*40)

    //Faz a data e hora ficarem visíveis em 40s
    function openWindow(){
      document.getElementById("infos").style.visibility = "visible"
    }
    this.setTimeout(openWindow, 1000*40)

    //Retira o blur do background em 39s
    function offBlur(){
      document.getElementById("front").style.filter = "blur(0px)"
    }
    this.setTimeout(offBlur, 1000*39)
  }