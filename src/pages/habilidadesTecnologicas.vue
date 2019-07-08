<template>
  <f7-page>
    <f7-navbar :title="this.navbar.title" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list tablet-inset>
      <f7-list-item >
        <f7-icon slot="media" f7="demo-list-icon"></f7-icon>
        <f7-block-title large style="margin: 0;">A continuacion se describen algunas habilidades tecnologicas</f7-block-title>
      </f7-list-item>
    </f7-list>
    <f7-block inset>
    </f7-block>   
    <!-- row 1 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/android.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Android
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/cordova.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Cordova
                <br />
                <small :style="{opacity: 0.7}">Cli</small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card> 
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/css.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Css
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card> 
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/html5.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Html
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card> 
      </f7-col>
      </f7-block>
    </f7-row>

    <!-- row 2 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/Java.svg)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Java
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/jQuery.gif)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                jQuery
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>  
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/js.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                JavaScript
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card> 
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/laravel.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Laravel
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      </f7-block>
    </f7-row>

    <!-- row 3 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/materialize.svg)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Materialize
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/php.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Php
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/symfony.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Symfony
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/vue.svg)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Vue
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>
      </f7-block>
    </f7-row>

    <!-- row 4 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/vuetify-logo-300.webp)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Vuetify
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/framework7.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Framework7
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/ts.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                TypeScript
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/mongodb.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                mongo Db
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>
      </f7-block>
    </f7-row>

    <!-- row 5 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/MySQL.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                MySQL
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/postgresql.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Postgresql
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/Redis.png)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Redis
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>

      <f7-col style="padding: 25px;">
        <f7-card expandable style="margin: auto;">
          <f7-card-content bg-color="yellow" :padding="false"  style="height: 680px; width:680px;">
            <div class="bg-color-white" :style="{height: '300px', backgroundImage: 'url(static/section/habilidadesTecnicas/electron.svg)', backgroundSize: '150px', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}">
              <f7-card-header text-color="black" class="display-block">
                Electron
                <br />
                <small :style="{opacity: 0.7}"></small>
              </f7-card-header>
              <f7-link card-close color="red" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="close_round_fill"></f7-link>
            </div>
            <div class="card-content-padding ">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </f7-card-content>
        </f7-card>
        </f7-card>   
      </f7-col>
      </f7-block>
    </f7-row>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Habilidades tecnologicas",
          "bg-color":"deeppurple",
          "text-color":"white",
          "color":"white",
        }
      }
    },
    methods: {

    }
  };
</script>