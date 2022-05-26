<template>
<div id="app">

  <Header/>
  <router-view path="$router.key" />
  <Footer/>

 

</div>
 
</template>

<script>

import './styles/global.css';
import Header  from './componentes/Header';
import Footer from './componentes/footer';

export default {
  name: 'App',
  components: {
   Header,
   Footer
  }
}
</script>


