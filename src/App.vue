<template>
  <div id="app">

    <div class="main-head">
      <h1>TODO APPLICATION</h1>
    </div>

    <div id="appCnt">
      <router-view />
    </div>

  </div>
</template>



<style lang="sass">
body
  margin: 0
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01))

#app
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#appCnt
  padding: 5%

.main-head
  padding: 60px
  color: #fff
  text-shadow: 1px 1px 5px #000
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('https://source.unsplash.com/3BLry98ZLA4/1200x628')
  background-size: cover
  background-position: 50% 30%

input
  padding: 10px
  width: auto
  border-radius: 3px
  border: 1px solid #aeaeae
button, select
  padding: 10px 30px
  cursor: pointer
  border-radius: 3px
button
  background-color: #4f68d8
  color: #fff
  border: none
button:hover
  background-color: #3a56d2
button.buttonDisabled
  background: ligthgrey
</style>

